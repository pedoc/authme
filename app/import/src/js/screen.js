module.exports = {
	/**
	 * Read QR code from screen capture
	 */
	captureFromScreen: () => {
		let string = ""

		desktopCapturer.getSources({ types: ["screen"] }).then(async (sources) => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({
					audio: false,
					video: {
						mandatory: {
							chromeMediaSource: "desktop",
							chromeMediaSourceId: sources[0].id,
							minWidth: 1280,
							maxWidth: 1280,
							minHeight: 720,
							maxHeight: 720,
						},
					},
				})

				qrHandleStream(stream)
			} catch (error) {
				dialog.showMessageBox(currentWindow, {
					title: "Authme",
					buttons: [lang.button.close],
					type: "error",
					noLink: true,
					message: `${lang.import_dialog.capture_error} \n\n${error}`,
				})

				logger.error("Error starting capture!", error.stack)
			}
		})

		const qrHandleStream = async (stream) => {
			const track = stream.getTracks()[0]

			const video = document.querySelector("#qrVideo")
			video.srcObject = stream

			code_found = false

			const reader = new QrcodeDecoder()

			reader.decodeFromVideo(video).then(async (res) => {
				code_found = true

				if (res.data.startsWith("otpauth://totp/") || res.data.startsWith("otpauth-migration://")) {
					qrcode_found = true

					if (res.data.startsWith("otpauth://totp/")) {
						string += qrConvert(res.data)
					} else {
						string += gaConvert(res.data)
					}

					const save_exists = fs.existsSync(path.join(folder_path, "codes", "codes.authme"))

					const result = await dialog.showMessageBox(currentWindow, {
						title: "Authme",
						buttons: [lang.button.yes, lang.button.no],
						type: "info",
						noLink: true,
						defaultId: 1,
						cancelId: 1,
						message: `${lang.import_dialog.correct_qrcode_found_0} ${lang.import_dialog.correct_qrcode_found_1}`,
					})

					if (result.response === 0) {
						if (save_exists === true) {
							ipc.invoke("importExistingCodes", Buffer.from(string).toString("base64"))
						} else {
							ipc.invoke("importCodes", Buffer.from(string).toString("base64"))
						}

						saveFile(string)
					} else {
						if (save_exists === true) {
							ipc.invoke("importExistingCodes", Buffer.from(string).toString("base64"))
						} else {
							ipc.invoke("importCodes", Buffer.from(string).toString("base64"))
						}
					}

					reader.stop()
					track.stop()
				} else {
					dialog.showMessageBox(currentWindow, {
						title: "Authme",
						buttons: [lang.button.close],
						type: "error",
						noLink: true,
						message: lang.import_dialog.wrong_qrcode,
					})

					reader.stop()
					track.stop()
				}
			})

			setTimeout(() => {
				if (code_found === false) {
					dialog.showMessageBox(currentWindow, {
						title: "Authme",
						buttons: [lang.button.close],
						type: "error",
						noLink: true,
						message: lang.import_dialog.no_qrcode_captured,
					})

					reader.stop()
					track.stop()
				}
			}, 1000)
		}
	},
}
