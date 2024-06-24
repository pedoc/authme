export const localeZH = {
	common: {
		confirm: "确认",
		continue: "继续",
		cancel: "取消",
		close: "关闭",
		copy: "复制",
		copied: "已复制",
		moreOptions: "更多选项",
		name: "名称",
		description: "说明",
		edit: "编辑",
		delete: "删除",
	},

	menu: {
		codes: "代码",
		import: "导入",
		export: "导出",
		edit: "编辑",
		settings: "设置",
		show: "显示",
		exit: "退出",
	},

	landing: {
		welcome: "欢迎!",
		gettingStarted: "入门",
		gettingStartedText: "请选择如何使用 Authme.",
		passwordAuth: "密码验证",
		passwordAuthText: "启动 Authme 时输入密码.",
		noAuth: "无验证",
		noAuthText: "启动 Authme 时无需输入密码.",
		hardwareAuth: "硬件验证",
		hardwareAuthText: "使用 Windows Hello, Touch ID 或其他兼容 WebAuthn 的硬件来确认重要操作.",
		createPass: "创建密码",
		createPassText: "创建一个复杂密码用于加密你的代码.",
		password: "密码",
		confirmPassword: "确认密码",
		chooseDifferent: "选择其他验证方式",
		chooseDifferentText: "返回上一页并选择其他身份验证方法.",
		goBack: "返回",
		dialog: {
			passwordsNotMatch: "密码不匹配. \n\n请重试!",
			passwordMinLength: "密码最小长度为8位. \n\n请重试!",
			passwordMaxLength: "密码最大长度为64位. \n\n请重试!",
			commonPassword: "此密码属于常见弱密码,请输入更安全的密码!",
		},
	},

	confirm: {
		welcomeBack: "欢迎回来!",
		confirmPassword: "确认密码",
		confirmPasswordText: "请输入您的密码以继续.",
		password: "密码",
		forgotPassword: "忘记密码?",
		forgotPasswordText: "您的代码受密码保护.如果您忘记了密码,您将无法访问您的代码.",
		dialog: {
			wrongPassword: "密码错误! \n\n请重试!",
		},
	},

	codes: {
		importCodes: "导入您的 2FA 代码",
		importCodesText: "在导入页面导入您现有的 2FA 代码.",
		importCodesButton: "导入代码",
		noSearchResultsFound: "没有匹配项",
		noSearchResultsFoundText: "没有匹配项",
		dialog: {
			noSaveFileFound: "没有已保存的文件. \n\n请转到 代码 或 导入 页面添加或导入您的代码!",
			codesImported: "代码已导入. \n\n您可以在编辑页面编辑您的代码.",
		},
	},

	import: {
		supportedTypes: "支持 2FA 类型",
		totpQRCode: "TOTP",
		totpQRCodeText: "如果您想设置 2FA,则常见的方式是扫描一个 QR 代码.它通常由6位数字组成,每30秒变化一次.",
		instructions: "使用说明",
		googleAuthQRCode: "Google Authenticator",
		googleAuthQRCodeText: "如果您正在使用 Google Authenticator,则您可以导出所有现有代码并将其导入 Authme",
		chooseImportMethod: "选择导入方式",
		importFromImage: "从图片导入",
		importFromImageText: "选择包含兼容二维码的图片.",
		chooseImageButton: "选择图片",
		enterSecretManually: "输入配置密钥",
		enterSecretManuallyText: "输入 TOTP 密钥和名称.",
		enterSecretManuallyButton: "配置密钥",
		screenCapture: "捕获屏幕",
		screenCaptureText: "从屏幕上捕获兼容二维码.",
		screenCaptureButton: "捕获屏幕",
		webcam: "Webcam",
		webcamText: "使用您的 webcam 扫描兼容二维码.",
		webcamButton: "使用 webcam",
		// authme
		authme: "Authme",
		authmeText: "从 Authme 导入所有代码.",
		authmeFile: "Authme 文件",
		authmeFileText: "从 Authme 导出文件中再次导入.",
		authmeFileButton: "选择文件",
		// 2FAS
		twoFasAuth: "2FAS Authenticator",
		twoFasAuthText: "从其他 2FA Authenticator 备份导入.",
		twoFasFile: "2FAS 备份文件 (无密码)",
		twoFasFileText: "从其他 2FA Authenticator 备份导入无密码保护的代码.",
		twoFasFileButton: "选择文件",
		// aegis
		aegisAuth: "Aegis Authenticator",
		aegisAuthText: "从 Aegis vault 导入所有代码.",
		aegisFile: "Aegis vault 文件 (无密码)",
		aegisFileText: "从 Aegis vault 文件导入无密码保护的代码.",
		aegisFileButton: "选择文件",
		// html dialogs
		captureScreenTitle: "从屏幕导入",
		captureScreenWaiting: "等待二维码...",
		manualEntry: "配置密钥",
		manualEntryText: "请输入名称和 2FA 密钥.",
		manualEntryName: "名称 (必填)",
		manualEntrySecret: "秘钥 (必填)",
		manualEntryDescription: "说明",
		// tutorial
		googleAuthTutorial: ["从 Google Authenticato 导出2FA 代码: 点击屏幕左上角的菜单:转移账户->导出账户", "从屏幕截图并保存二维码,或者如果你使用的是 Android 手机,可以用另一部手机拍照.将这些照片传输到你的电脑上", "进入 Authme 的 导入 页面: 侧边栏 -> 导入", "单击“选择图片”按钮，然后选择从手机传输的图片"],
		totpTutorial: ["前往您想要设置 2FA 的网站", "截取包含二维码的屏幕图像 (在Windows系统上使用 Win + Shift + S 组合键, 在macOS上使用 Cmd + Shift + 3 组合键) , 并保存为图片文件", "进入 Authme 的 导入 页面: 侧边栏 -> 导入", "单击“选择图片”按钮，然后选择刚刚保存的图片"],
		authmeTutorial: ["在 Authme 中，转到“导出”页面，然后选择“导出 Authme 文件”，“您可以在 Authme 的导入页面上再次导入此文件"],
		aegisTutorial: ["点击屏幕右上角的菜单: 设置 -> 导入与导出 -> 导出", "选择 Aegis JSON 格式并且取消选中加密复选框后导出", "将导出后的文件发送到电脑并从 Authme 导入"],
		twoFasTutorial: ["点击导航栏上的菜单: 2FAS 备份 -> 导出到文件", "选择导出文件并取消密码保护后导出", "将导出后的文件发送到电脑并从 Authme 导入"],
	},

	export: {
		exportCodes: "导出代码",
		exportAuthmeFile: "导出 Authme 文件",
		exportAuthmeFileText: "适用于 Authme 程序之间的导入.",
		exportHTMlFile: "导出 HTML 文件",
		exportHTMlFileText: "适用于二维码扫描导入或备份.",
		exportFileButton: "导出文件",
	},

	edit: {
		editCodes: "编辑代码",
		dialog: {
			saveChanges: "您想保存改动吗?",
			deleteCode: "您确定要删除此代码?",
		},
	},

	settings: {
		general: "常规",
		launchOnStartup: "开机启动",
		launchOnStartupText: "在系统启动时运行 Authme 并驻留在系统托盘区域.",
		minimizeToTray: "最小化到托盘",
		minimizeToTrayText: "关闭应用程序时,Authme 不会退出.您可以从系统托盘再次打开 Authme.",
		optionalAnalytics: "可选分析",
		optionalAnalyticsText: "发送的有效载荷是完全匿名的.发送的数据包括您的 Authme 版本和有关您的计算机的信息.",
		windowCapture: "窗口捕获",
		windowCaptureText: "默认情况下,Authme 无法被外部程序捕获(截图).如果您启用此功能,它将一直有效，直到您重新启动 Authme.",
		clearData: "清理",
		clearDataText: "清理密码,2FA 代码和其他设置. 请注意,此操作后不可恢复您的数据!",
		clearDataButton: "清理",
		codes: "代码",
		codesDescription: "代码说明",
		codesDescriptionText: "是否显示 2FA 的代码说明. 单击说明将自动复制到剪贴板.",
		blurCodes: "隐藏",
		blurCodesText: "隐藏保存的代码.您仍然可以复制代码或将鼠标悬停在代码上以显示它们.",
		codesLayout: "布局",
		codesLayoutText: "您可以选择您喜欢的布局.网格可显示更多项目并适应屏幕尺寸.",
		sortCodes: "排序",
		sortCodesText: "您可以选择如何对代码进行排序.默认情况下,代码按导入顺序排序.",
		shortcuts: "快捷方式",
		shortcutsEditButton: "编辑",
		shortcutsResetButton: "重置",
		shortcutsDeleteButton: "删除",
		about: "关于",
		feedback: "反馈",
		feedbackText: "感谢您的反馈! 请在 GitHub 或通过电子邮件 (authme@levminer.com) 报告问题或功能请求.",
		logs: "日志",
		logsText: "日志用于辅助定位程序bug.",
		showLogsButton: "显示日志",
		aboutAuthme: "关于 Authme",
		aboutAuthmeText: "当前 Authme 版本和计算机信息.",
	},
}
