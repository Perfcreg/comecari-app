const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
    logOut: "Log Out", // @demo remove-current-line
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
    letsGo: "Let's go!", // @demo remove-current-line
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack", // @demo remove-current-line
  },
  emptyStateComponent: {
    generic: {
      heading: "So empty... so sad",
      content: "No data found yet. Try clicking the button to refresh or reload the app.",
      button: "Let's try this again",
    },
  },
  // @demo remove-block-start
  errors: {
    invalidEmail: "Invalid email address.",
  },
  // Auth Text

  // login Screen
  loginScreen: {
    signIn: "Log in to Comecari",
    enterDetails: "Enter your email and password to sign in.",
    emailFieldLabel: "Email",
    passwordFieldLabel: "Password",
    emailFieldPlaceholder: "Enter your email address",
    passwordFieldPlaceholder: "Enter your password",
    tapToSignIn: "sign in!",
    hint: "Hint: you can use any email address and your favorite password :)",
    keepLog: "Keep me logged in",
    forgetPass: "Forgot Password?",
    signWithGoggle: "Sign in with Google",
    dontHaveAnAcc: `Don't have an account?`,
    signOpt: "Or Sign in with",
    signUp: " Sign Up",
  },

  // Phone Number to get OTP Screen
  phoneNumScreen: {
    phoneNumberHeader: "Sign Up",
    phoneNumberSubHeader: "A One-Time Password (OTP) will be sent to your number immediately",
    phoneNumberPlaceHolder: "(+234) - 555 5555 555",
    phoneNumberButton: "Get OTP",
    phoneNumberLabel: "Phone Number",
    PhoneNumberSent: "Enter the Code sent to"
  },

  // SIgnUp Profile Screen

  signUpProfile: {
    heading: "Welcome",
    subHeading: `It's great to have you here. Kindly fill in the detailsbelow to get started.`,
    profileEmailLabel: "Email Address",
    profileFirstNameLabel: "First Name",
    profileLastNameLabel: "Last Name",
    firstPlaceHolder: "Enter your first name",
    lastPlaceHoder: "Enter your last name",
    profileButton: "Submit",
  },

  // Reset Screen

  Reset: {
    heading: "Reset Password",
    subHeading: "Enter your number for an OTP to reset password",
  },

  // Pasword Reset Screen
  passwordReset: {
    heading: "Reset Password",
    passwordlabel: "New Password",
    confirmPassword: "Confirm Password",
    passwordPlaceHolder: "********",
    confirmPlaceHolder: "********",
  },

  User: {
    trackHeadr: "Track your package",
    trackSub: "Please enter your tracking number",
    trackPlaceHoler: "Tracking number...",
    currentShipment: "Current Shipment",
    seeMore: "see more",
    shipmentNum: "Shipment Number",
    from: "From:",
    Numbers: "12345678",
    to: "Shipping to",
    pickUp: "Ikeja, Lagos",
    Delivery: "Port Harcourt, Rivers State",
    status: "Your package is in transit",
    recentShip: "Recent Shipment",
  },
  SideBar: {
    name: "Jone Doe",
    view: "View profile",
  },
  Book: {
    select: "Hold down to view truck details",
    pickupPlaceHolder: "Select pickup location",
    pickup: "Ikeja, Lagos State",
    desPlaceHolder: "Select destination",
    destination: "Port Harcourt, Rivers State",
    weight: "Weight (kg)",
    weightVal: "2,500",
    document: "Document",
    documentBtn: "Click to Upload",
    tagDrive: "Tag Carrier (optional)",
    intructions: "Special Instruction",
    instuctionCon: "Lorem ipsum dolor sit amet mon consectetur see mon sit mor ammir",
    offer: "Make an offer",
    price: "200,000",
    priceLimit: "* offer cannot go below 250,000",
    button: "Submit",
    nextBtn: "Next",
    Pay: "Pay",
    pamentMessage:
     "Furniture trucks are built to load and unload furniture. They are used to move houses andto move huge hauls of furniture from manufacturers to dealerships.. They are equipped with a ramp or a lift gate if required.",
    booked: "Your shipment was booked successfully",
  },
  Track: {
    track: "Track Shipment",
    trackLabel: "Tracking No",
    trackPlace: "2333BG4376",
    trackBtn: "Track",
    shipmentNum: "Shipment Number",
  },
  chat: {
    Name: "Mr John Doe",
    Occupation: "Your Driver",
  },
  history: {
    shipment: "Shipment History",
    busType: "Truck",
    weight: "2500kg",
    price: "200,000",
    instruction:
      "Special Instructions: Lorem ipsum dolor sit ame mon consectetur see mon sit mor ammir Lorem ipsum dolor sit amet mon consectetur see mon sit mor ammir Lorem ipsum dolor sit amet mon  consectetur see mon sit mor ammir",
  },

  Bid: {
    edit: "Edit Bids",
    bidder: "Bidders",
    name: "Mr Matt Smith Joe",
    price: "250,000",
    acceptBtn: "Accept",
    RejectBtn: "Reject",
    details: "Bid Details",
    Truck: "Truck Size",
    update: "Update",
    offer: "Offer",
    Document: "Document",
    Download: "Download",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. culpa velit amet labore. Animi, perferendis. Est  molestiae animi nemo saepe, alias laboriosam iusto",
  },

  Switch: {
   driver: "Driver Mode",
   user: "User Mode ",
  },

  Notification: {
    today: "Today",
    re: "Your bid got accepted by Mr Isiah",
    support: "Support Case",
    supportText:
      "Lorem ipsum dolor mon amet sii mon bu siu uui er old shad s ieruienfd hasdhdaffjdfds..",
    last: "Last 7 days",
    support2: "Support Case #22",
    re2: "Withdrawal to UBA Bank failed",
    re2Text:
      "I am writing to address the recent issue you encountered with a failed withdrawal to UBA bank. We apologize for any inconvenience this may have caused you and assure you that we are committed to resolving the matter promptly.",
    re3Text:
      "After investigating the situation, we understand that the withdrawal attempt did not go through as expected. We apologize for the inconvenience and understand your frustration. Rest assured, we are actively working to rectify the situation and ensure a smooth resolution.",
    re4Text: "In order to assist you further, we kindly suggest the following next steps",
  },
  support: {
    supportText: "We are here to help so please get in touch with us",
    Phone: "Phone Number",
    phoneNum: "(+234) 802 8922 892",
    Email: "Email Address",
    eAddress: "support@comecari.com",
    live: "Use Live Chat",
    liveChat: "We're eager to hear from you!",
  },
  setting: {
    push: "Push Notifications",
    dark: "Dark Mode",
    card: "My cards",
  },
  profile: {
    edit: "Edit User",
  },
  DriverHomePage: {
    Name: "Hi Mr John",
    pending: "You have 3 pending bids",
    balance: "Your Balance",
    balanceVal: "245,000",
    onGoing: "On Going Jobs",
    trans: "In transit",
    accept: "Accept",
  },
  Truck: {
    add: "Add Truck",
    truckType: "Covered Van",
    history: "History",
    details: "Details",
    truckModel: "Truck Model",
    modelNum: "0011223344",
    weight: "Weight",
    weightNum: "4000 kg",
    height: "Weight",
    heightNum: "400 cm",
    width: "Width",
    length: "Length",
    withDraw: "Withdraw",
    accNum: "Account Number",
    bank: "Bank",
    bankVal: "XXXX XXX Bank",
    name: "Name",
    nameVal: "JOHN SMITH DOE",
    general: "General",
    Stat: "Stats",
    email: "olamiquadri1@gmail.com",
    rating: "4.8",
    ride: "57 Rides",
    comment: `"Mr John is a great person and very nice to work with."`,
    commenterName: "- Carey",
    recommendation: "View 11 other recommedations",
    location: "Abule-egba, Lagos",
    day: "Tuesday",
    time: "9 AM",
    
  },

  registration: {
    reg: "Driver Registration",
    firstNameLabel: "First Name",
    lastNameLabel: "LastName",
    lastName: "Smith",
    firstName: "John",
    license: "License",
    licenseNum: "45555567544343423",
    companyLabel: "Company Label",
    company: "6787763",
    err: "* Ask your company for referral code (if applicable)",
    next: "Next",
    previos: "Previous",
    driverFront: "Driver's License (Front)",
    driverBack: "Driver's License (Back)",
    click: "Click to upload",
    road: "Road Worthiness License",
    licensePic: "license.jpg",
  },
  market: {
    market: "Markerplace",
    filter: "Filter",
    details: "View Details",
    truck: "Minivan",
    truckType: "Select Truck Type",
    show: "Show 17 Result",
  },
  card: {
    default: "Default Card",
    uba: "UBA",
    access: "ACCESS",
    cardNum: "3423 2333 2321 2332",
    other: "Other Cards",
    add: "Add Card",
    accountLabel: "Account Number",
    accNum: "0011223344",
    bankLabel: "Bank",
    backVal: "XXXXXX BANK",
    name: "Name",
    nameVal: "JOHN SMITH DOE",
  },
  demoNavigator: {
    componentsTab: "Components",
    debugTab: "Debug",
    communityTab: "Community",
    podcastListTab: "Podcast",
  },
  demoCommunityScreen: {
    title: "Connect with the community",
    tagLine:
      "Plug in to Infinite Red's community of React Native engineers and level up your app development with us!",
    joinUsOnSlackTitle: "Join us on Slack",
    joinUsOnSlack:
      "Wish there was a place to connect with React Native engineers around the world? Join the conversation in the Infinite Red Community Slack! Our growing community is a safe space to ask questions, learn from others, and grow your network.",
    joinSlackLink: "Join the Slack Community",
    makeIgniteEvenBetterTitle: "Make Ignite even better",
    makeIgniteEvenBetter:
      "Have an idea to make Ignite even better? We're happy to hear that! We're always looking for others who want to help us build the best React Native tooling out there. Join us over on GitHub to join us in building the future of Ignite.",
    contributeToIgniteLink: "Contribute to Ignite",
    theLatestInReactNativeTitle: "The latest in React Native",
    theLatestInReactNative: "We're here to keep you current on all React Native has to offer.",
    reactNativeRadioLink: "React Native Radio",
    reactNativeNewsletterLink: "React Native Newsletter",
    reactNativeLiveLink: "React Native Live",
    chainReactConferenceLink: "Chain React Conference",
    hireUsTitle: "Hire Infinite Red for your next project",
    hireUs:
      "Whether it's running a full project or getting teams up to speed with our hands-on training, Infinite Red can help with just about any React Native project.",
    hireUsLink: "Send us a message",
  },
  demoShowroomScreen: {
    jumpStart: "Components to jump start your project!",
    lorem2Sentences:
      "Nulla cupidatat deserunt amet quis aliquip nostrud do adipisicing. Adipisicing excepteur elit laborum Lorem adipisicing do duis.",
    demoHeaderTxExample: "Yay",
    demoViaTxProp: "Via `tx` Prop",
    demoViaSpecifiedTxProp: "Via `{{prop}}Tx` Prop",
  },
  demoDebugScreen: {
    howTo: "HOW TO",
    title: "Debug",
    tagLine:
      "Congratulations, you've got a very advanced React Native app template here.  Take advantage of this boilerplate!",
    reactotron: "Send to Reactotron",
    reportBugs: "Report Bugs",
    demoList: "Demo List",
    demoPodcastList: "Demo Podcast List",
    androidReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running, run adb reverse tcp:9090 tcp:9090 from your terminal, and reload the app.",
    iosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    macosReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    webReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
    windowsReactotronHint:
      "If this doesn't work, ensure the Reactotron desktop app is running and reload app.",
  },
  demoPodcastListScreen: {
    title: "React Native Radio episodes",
    onlyFavorites: "Only Show Favorites",
    favoriteButton: "Favorite",
    unfavoriteButton: "Unfavorite",
    accessibility: {
      cardHint:
        "Double tap to listen to the episode. Double tap and hold to {{action}} this episode.",
      switch: "Switch on to only show favorites",
      favoriteAction: "Toggle Favorite",
      favoriteIcon: "Episode not favorited",
      unfavoriteIcon: "Episode favorited",
      publishLabel: "Published {{date}}",
      durationLabel: "Duration: {{hours}} hours {{minutes}} minutes {{seconds}} seconds",
    },
    noFavoritesEmptyState: {
      heading: "This looks a bit empty",
      content:
        "No favorites have been added yet. Tap the heart on an episode to add it to your favorites!",
    },
  },
  // @demo remove-block-end
}

export default en
export type Translations = typeof en
