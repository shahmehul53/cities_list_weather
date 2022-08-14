# cities_list_weather

For App Icon
Android - 
1. Upload image in Android Asset Studio
2. Unzip the file and drag the images in /android/app/src/main/res/ in right subfolder {hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi}

iOS - 
1. Its the same thing what we follow in swift.There's a default AppIcon in Image.xcasset folder.
2. Make App Icon or https://resizeappicon.com/ is used to generate the app icons
2. Unzip the folder and then Drag and drop app logo icon over AppIcon image.


For SplashScreen 
iOS - 
1. We have to generate images from https://appicon.co/#image-sets
2. we have to run npm i react-native-splash-screen --save and then pod install in terminal
3.Replace the code in AppDelegate.m with following
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
// Import RNSplashScreen
#import "RNSplashScreen.h"
#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>
static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"MySplashScreen"
                                            initialProperties:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  // Set the splash screen to show by default.
  [RNSplashScreen show]; 
  return YES;
}
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
@end
Here, we made two significant changes to the AppDelegate file. First, we imported the RNSplashScreen we installed earlier into the AppDeligate.m. Next, we set the RNSplashScreen to show by default with the code [RNSplashScreen show].
4. Open Xcode, click images.xcassets, right-click below Appicon, and choose your image. 
Set the image name to LaunchScreen, open the assets folder, navigate to the Images folder, and open the iOS folder.
Inside the splash folder, drag the three images over the three boxes on Xcode named 1x, 2x, 3x.
5. Next, select LaunchScreen.storyboard.
 Under View, select the labels SplashScreen and “Powered by React Native,” and press delete on your keyboard.
 Select view and click the ruler icon. Uncheck “Safe Area Layout Guide,” then click the plus icon + to search for an image. Drag the image view to the view.
 Finally, click on the constraints icon and set all the constraints to 0.
6.Now that we have our image view setup, click the image property icon and change the image to LaunchScreen.
 Set the content mod to aspect fill.
7.To confirm your application can run successfully, run a build from Xcode.

OR 

We can insert the image or design the Splashscreen ui manually like we do in swift from LaunchScreen.storyboard

ANDROID - 
1. navigate to android/src/main/java
2. Update MainActivity.java to use react-native-splash-screen.
@Override
  protected String getMainComponentName() {
    return "MySplashScreen";
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

3.Next, create a file called launch_screen.xml in app/src/main/res/layout (create the layout-folder if it doesn’t exist).
 Add the code below to the launch_screen.xml.

<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent">
    <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
</RelativeLayout>

4. Copy all the assets for Android into the res folder. 
Create colors.xml in the values folder and add a color called primary_dark in app/src/main/res/values/colors.xml

<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_dark">#000000</color>
</resources>

5.Open the Android folder in Android Studio, open AVD, and run your application.
6.Lastly, to hide the splash screen on app load, you’ll need to do two things: 
  1. Import the react-native-splash-screen package into the root component (App.js) of your React Native app
  2. Use React.useEffect() to hide the splash screen with the code below:

React.useEffect(() => {
     SplashScreen.hide();
   });



Reference - https://blog.logrocket.com/building-a-splash-screen-in-react-native/
