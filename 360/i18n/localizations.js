/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "iOS Deep Dive",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "iOS Deep Dive",
		"%l_slidenote_titleslide": "<b>Module time: 90 mins</b>(60 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "iOS Platform Characteristics",
		"%l_agenda2": "iOS-specific API Overview",
		"%l_agenda3": "Key APIs",
		"%l_agenda4": "Deep Dive: iOS Properties",
		"%l_agenda5": "Examples in Action",
		"%l_agenda6": "Lab Exercise Overview",
		"%l_slidenote_agenda": "We will give an overview on the platform characteristics, including basic UI structure.  Then we�ll focus on iOS-specific APIs, starting with a high level view of what the key areas are in Titanium.Let the deep dive begin..",
		
		"%l_platform_chars": "Platform Characteristics",
		"%l_what_we": "What we are talking about is <b>Cocoa Touch</b>, which provides the key frameworks for developing applications on devices running iOS",
		"%l_platform_chars_image": "<img src='images/ios-platform.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_platform_chars": "Cocoa Touch provides the key frameworks for developing applications on devices running iOS. Some of these key frameworks are:<br> Foundation Kit Framework<br> UIKit Framework (based on Application Kit)<br>- Game Kit Framework<br>- iAd Framework<br> Map Kit Framework<br>This may be helpful for developers to understand.",

		"%l_platform_chars_2_image": "<img src='images/ios-platform-2.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_platform_chars_2": "These are taken from Apple�s HIG (Human Interface Guidelines)<br>- Single Window = there�s a single UIKit / iOS window object regardless of the number of Titanium windows you create.",
		
		"%l_ios_ui": "iOS User Interface Basics",
		"%l_ios_ui_image": "<img src='images/ios-ui.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_ui": "A tab bar gives people the ability to switch between different subtasks, views, or modes.<br>Use a tab bar to give users access to different perspectives on the same set of data or different subtasks related to the overall function of your app.",
		
		"%l_ios_api": "iOS-Specific API Overview",
		"%l_ios_api_image": "<img src='images/ios-api.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_api": "iOS-specific APIs can be broken out into 2 segments: form and function",
		
		"%l_key_api": "Key APIs",
		"%l_key_image": "<img src='images/key-api.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_key_api": "NavigationGroup actually works on iPad and our API should probably be moved out of the iPhone namespace to the iOS namespace<br>As of SK1.8, Toolbar, TabbedBar, and CoverFlowView were moved to iOS namespace<br>DashboardView not there yet",
	
		"%l_ios_nav": "UI: Navigation Group",
		"%l_ios_nav_image": "<img src='images/ios-nav.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_nav": "A Navigation Group implements a specialized view that manages the navigation of hierarchical content. A Navigation Group is very similar to Tab Bars with the exception that they do not maintain a group of windows with a interface bar at the bottom",
		
		"%l_ios_nav_image_2": "<img src='images/nav-group.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_nav_2": "A navigation bar enables navigation through an information hierarchy and, optionally, management of screen contents.",
		
		"%l_ios_nav_eg": "UI: Navigation Group - Example",
		"%l_os_nav_eg_image": "<img src='images/nav-group-eg.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ios_nav_eg": "nav.window property defines the �home� window of the NavGroup<br>Code example doesn�t show additional sub windows to the NavGroup<br>The NavGroup itself then needs to be added to a window",
		
		"%l_ios_nav_eg": "UI: Navigation Group - Example",
		"%l_os_nav_eg_2_image": "<img src='images/nav-group-eg-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ios_nav_eg_2": "To add another window to the stack, create it and then call open",
		
		"%l_ios_nav_bar": "UI: Navigation Bar - Example",
		"%l_os_nav_bar_image": "<img src='images/nav-bar.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ios_nav_bar": "There are other components that you can set�<br>setTItleControl()<br>setTitleImage()<br>setTitle()",
		
		"%l_ui_toolbar": "UI: Toolbars",
		"%l__ui_toolbar_image": "<img src='images/ui-toolbar.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_toolbar": "On iPhone, a toolbar appear at the bottom edge of a screen or view, but on iPad it can instead appear at the top edge. Can also appear atop a keyboard.<br>Toolbar items are displayed equally spaced across the width of the toolbar. The precise set of toolbar items can change from view to view, because the items are always specific to the context of the current view.<br>On iPhone, changing the device orientation from portrait to landscape can change the height of the toolbar automatically. On iPad, the height and translucency of a toolbar does not change with rotation.",
		
		"%l__ui_toolbar_2_image": "<img src='images/ui-toolbar-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_toolbar_2": "win.setToolbar([toolActInd],{animated:true});<br>Buttons are stored as an array of objects (NSArray)<br>win.toolbar property � setting that docks the toolbar to the bottom of the window<br>Otherwise you could position it anywhere (if you do win.add(toolbar))",
		
		"%l__ui_toolbar_3_image": "<img src='images/ui-toolbar-3.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_toolbar_3": "Works with text fields and text areas",
		
		"%l_ui_buttonbar": "UI: Button Bar",
		"%l_ui_buttonbar_image": "<img src='images/ui-buttonbar.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_buttonbar": "TabbedBars are also known as segmented controls.  A segmented control is a linear set of segments, each of which functions as a button that can display a different view.<br>The length of a segmented control is determined by the number of its segments; the height of a segmented control is fixed. The width of each segment is proportional, based on the total number of segments. When users tap a segment, the segment displays a selected state.<br>Use a segmented control to offer closely related, but mutually exclusive choices.",
		
		"%l_ui_tabbar": "UI: Tabbed Bar",
		"%l_ui_tabbar_image": "<img src='images/ui-tabbar.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_tabbar": "TabbedBars and button bars are also known as segmented controls.  A segmented control is a linear set of segments, each of which functions as a button that can display a different view. If you set a segmented control to have a momentary style, a segment doesn�t show itself as selected (blue background) when the user touches it. The disclosure button is always momentary and doesn�t affect the actual selection.<br>The length of a segmented control is determined by the number of its segments; the height of a segmented control is fixed. The width of each segment is proportional, based on the total number of segments. When users tap a segment, the segment displays a selected state.<br>Use a segmented control to offer closely related, but mutually exclusive choices.<br>Make sure that each segment is easy to tap. To maintain a comfortable hit region of 44 x 44 points for each segment, you need to limit the number of segments. On iPhone, a segmented control should have five or fewer segments.<br>As much as possible, maintain consistency in the size of each segment�s contents. Because all segments in a segmented control have equal width, it does not look good if the content fills some segments, but not others.<br>Avoid mixing text and images in a single segmented control. A segmented control can contain text or images. An individual segment can contain either text or an image, but not both. In general, it�s best to avoid putting text in some segments and images in other segments of a single segmented control..",
		
		"%l_ui_switch": "UI: Switch",
		"%l_ui_switch_image": "<img src='images/ui-switch.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_switch": "",
		
		"%l_ui_slider": "UI: Slider",
		"%l_ui_slider_image": "<img src='images/ui-slider.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_slider": "A slider consists of a track and a thumb (a circular control that the user can slide) and optional images that convey the meaning of the right and left values. When people drag the thumb along the slider, the value or process is updated continuously and is displayed in the track.",
		
		"%l_ui_ipad": "UI: iPad-Specific APIs",
		"%l_ui_ipad_image": "<img src='images/ui-ipad-api.png' style='margin-top:5px;height:150px;'/>",
		"%l_slidenote_ui_ipad": "There are two custom views related to iPad development.  We�ll explore these two in detail",
		
		"%l_key_api_ti": "Key APIs - Titanium.UI.iPad.Popover",
		"%l_key_api_ti_image": "<img src='images/key-api-ti.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_key_api_ti": "A popover is a self-contained view that hovers above the contents of a screen. It always displays an arrow that indicates the point from which it emerged. A popover can contain a wide variety of objects and views, such as:<br>Table, image, map, text, web, or custom views<br>Navigation bars, toolbars, or tab bars<br>Controls or objects that act upon objects in the current application view<br>In iPad apps, an action sheet always appears inside a popover.",
		
		"%l_key_api_ti_2_image": "<img src='images/key-api-ti-2.png' style='margin-top:5px;height:150px;'/>",
		"%l_slidenote_key_api_ti_2": "The view:button property designates which UI element the pop over is anchored to. In otherwords, which one the bubble�s triangle points to.",
		
		"%l_ti_splitwindow": "Key APIs - Titanium.UI.iPad.SplitWindow",
		"%l_ti_splitwindow_image": "<img src='images/ti-splitwindow.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ti_splitwindow": "Both panes can contain a wide variety of objects and views, such as:<br>Table, image, map, text, web, or custom views.<br>Navigation bars, toolbars, or tab bars..",
		
		"%l_ti_splitwindow_2_image": "<img src='images/ti-splitwindow-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ti_splitwindow_2": "You can use a split view to display persistent information in the left pane and related details or subordinate information in the right pane. In this design pattern, when people select an item in the left pane, the right pane should display the information related to that item. (You�re responsible for making this happen in code.)<br>In general, when an app uses a split view in landscape, it displays the contents of the left pane in a popover when it rotates to portrait. However, you are not required to follow this pattern. If it makes sense in your app, you can design your UI to display side-by-side views in all orientations.<br>Avoid creating a right pane that is narrower than the left pane. Although the width of the right pane is up to you, it does not look good to use a width of less than 320 points (which is the width of the left pane).<br>Avoid displaying a navigation bar in both panes at the same time. Doing this would make it very difficult for users to discern the relationship between the two panes.<br>In general, indicate the current selection in the left pane in a persistent way. This behavior helps people understand the relationship between the item in the left pane and the contents of the right pane. This is important because the content of the right pane can change, but it should always remain related to the item selected in the left pane.",
		
		"%l_ui_tabbadge": "UI: Tab Badge",
		"%l_ui_tabbadge_image": "<img src='images/ui-tabbadge.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_tabbadge": "tab.badge has to be set to a number<br>Set to NULL to remove",
		
		"%l_ui_appbadge": "UI: App Badge",
		"%l_ui_appbadge_image": "<img src='images/ui-appbadge.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_appbadge": "Can be set while the app is running<br>Or, use a background service to set when the app�s not using",
		
		"%l_ui_cover": "UI: CoverFlow View",
		"%l_ui_cover_image": "<img src='images/ui-cover.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_cover": "If an image is tapped, you can grab an index so you can branch code accordingly",
		
		"%l_ui_dashboard": "UI: Dashboard View",
		"%l_ui_dashboard_image": "<img src='images/ui-dashboard.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_dashboard": "This isn�t setting or accessing the actual Springboard<br>Just presenting a similar view",
		
		"%l_ui_dashboard_2_image": "<img src='images/ui-dashboard-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_dashboard_2": "",
		
		"%l_ui_adview": "UI: AdView",
		"%l_ui_adview_image": "<img src='images/ui-adview.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_adview": "",
		
		"%l_ui_adview_2_image": "<img src='images/ui-adview-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_adview_2": "For more information on the iAd Network, see http://developer.apple.com/iad/<br>While you are developing your application, iAd Network sends test advertisements to your application. To assist you in validating your implementation, the iAd Network occasionally returns errors to test your error handling code. You can also test your error handling support manually by turning your device�s wireless capability off.<br>iAd Network automatically displays the correct ad depending on the how your application binary was downloaded onto your test device",
		
		"%l_ui_adview_3_image": "<img src='images/ui-adview-3.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ui_adview_3": "Set bottom:0 to dock the ad to the bottom of your window",
		
		"%l_key_api_pl": "Key APIs",
		"%l_key_api_pl_image": "<img src='images/key-api-pl.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_key_api_pl": "Platform specific business logic methods are available for iOS",
		
		"%l_key_api_app": "Key APIs - Titanium.App",
		"%l_key_api_app_image": "<img src='images/key-api-app.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_key_api_app": "This JS will run when the app is paused.<br>A local notification is local to an application on an iPhone, iPad, or iPod touch. Push notifications�also known as remote notifications�arrive from outside a device.",
		
		"%l_key_api_con": "Key APIs - Contacts, Media, Network",
		"%l_key_api_con_image": "<img src='images/key-api-con.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_key_api_con": "Use the newer Titanium.Network.Socket.TCP for sockets rather than the older TCPSocket<br>Network.Socket is cross-platform",
		
		"%l_deep_ios": "Deep Dive: iOS-Specific Properties",
		"%l_deep_ios_image": "<img src='images/deep-ios.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios": "Do a quick walk through of the various iPhone related properties.  It�s good to point out that these variables exist",
		
		"%l_deep_ios_2_image": "<img src='images/deep-ios-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_2": "",
		
		"%l_deep_ios_3_image": "<img src='images/deep-ios-3.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_3": "",
		
		"%l_deep_ios_4_image": "<img src='images/deep-ios-4.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_4": "",
		
		"%l_deep_ios_5_image": "<img src='images/deep-ios-5.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_5": "",
		
		"%l_deep_ios_6_image": "<img src='images/deep-ios-6.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_6": "",
		
		"%l_deep_ios_7_image": "<img src='images/deep-ios-7.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_7": "",
		
		"%l_deep_ios_56_image": "<img src='images/deep-ios-56.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_56": "",
		
		"%l_deep_ios_8_image": "<img src='images/deep-ios-8.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_8": "",
		
		"%l_deep_ios_9_image": "<img src='images/deep-ios-9.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_9": "",
		
		"%l_deep_ios_10_image": "<img src='images/deep-ios-10.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_10": "",
		
		"%l_deep_ios_11_image": "<img src='images/deep-ios-11.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_11": "",
		
		"%l_deep_ios_12_image": "<img src='images/deep-ios-12.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_12": "",
		
		"%l_deep_ios_13_image": "<img src='images/deep-ios-13.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_13": "",
		
		"%l_impl_app": "Implementing Application Preferences",
		"%l_impl_app_image": "<img src='images/impl-app.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_impl_app": "'The Settings Bundle'",
		
		"%l_impl_app_2_image": "<img src='images/impl-app-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_impl_app_2": "In iOS, the Foundation framework provides the low-level mechanism for storing the actual preference data.<br>http://developer.apple.com/library/ios/#documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Preferences/Preferences.html<br>Tutorial http://iphoneincubator.com/blog/tutorial/how-to-create-an-iphone-preferences-file",
		
		"%l_settings": "Settings bundle",
		"%l_settings_image": "<img src='images/settings.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_settings": "Settings bundle used to go in project/modules<br>Now needs to be in project/platform<br> In iOS, the Foundation framework provides the low-level mechanism for storing the actual preference data. <br>http://developer.apple.com/library/ios/#documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Preferences/Preferences.html<br>Tutorial					http://iphoneincubator.com/blog/tutorial/how-to-create-an-iphone-preferences-file",
		
		"%l_note": "Note: Pixel vs Points",
		"%l_note_image": "<img src='images/note.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_note": "iPad 2 is double the pixels of iPad 1",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_add_settings": "Add settings to an iOS application",
		"%l_demo_wiki": "Demo and wiki location",
		"%l_slidenote_lab_goals": "In this lab, you will create a Settings bundle so that application settings can be changed via the Settings app in the simulator or on a phone. You will then use that setting within the app to control the app's user interface",
		
		"%l_lab": "Lab",
		"%l_slidenote_lab": "There is no specific TiBountyHunter tie-in for this lab"

	}
});
