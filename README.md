# React Marketing Poops

[![npm version](https://img.shields.io/npm/v/YOUR_PACKAGE_NAME.svg)](https://www.npmjs.com/package/cc-aveunue-non-seamless-node)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/YOUR_USERNAME/YOUR_PACKAGE_NAME/blob/main/LICENSE)

React Marketing PoopUp is not just another notification library; it's your ultimate tool to turn visitors into customers 🤑. Say goodbye to missed opportunities and hello to skyrocketing conversions with impactful and attention-grabbing PoopUp notifications!

## Demo

![demo](https://github.com/abhijain1705/react-marketing-poops/assets/137091099/3c6e0707-88b7-4f89-8e5d-8a4a9c45f066)

## What is a React Marketing Poops?

PoopUp notifications are more than just messages; they're wake-up calls for your website visitors. By confronting them with the harsh realities of their pain points, PoopUps drive engagement and conversions like never before. With React PoopUp, you have the power to create PoopUps that deliver results!

## Key Features

1. Impactful Messaging: Write compelling messages that resonate with your audience and trigger an emotional response. Express the sting of unresolved pain points and compel visitors to take action.

2. Easy Integration: With a 1-minute no-code setup, adding PoopUps to your website is a breeze. Simply install React PoopUp, create your PoopUp messages, and watch as conversions soar.

3. Flexible Customization: Tailor PoopUps to match your brand's aesthetics and messaging style. Choose from a variety of icons and styles to create PoopUps that stand out and grab attention.

## How It Works

1. Create a PoopUp: Use React PoopUp's intuitive interface to create PoopUp messages in just 2 minutes. Identify the #1 problem your visitors face and craft a message that resonates.

2. Add to Your Site: Integrating PoopUps into your website is as easy as copy and paste. Simply add the provided code snippet to your site, and you're ready to go.

3. Get More Customers: Watch as PoopUps work their magic, reminding visitors of their pain points and driving them to take action. Increase engagement, conversions, and revenue with React PoopUp.

## Use Cases

1. Product Launches: Generate excitement and anticipation for new product releases by showcasing their benefits and features.

2. Limited Time Offers: Create a sense of urgency with time-sensitive promotions and exclusive deals.

3. Feedback Collection: Gather valuable feedback from visitors by prompting them to share their thoughts and opinions.

## Prerequisite

Before using this module, please make sure you have your merchant_id and working_key for test and production environment from CCAVenue payment gateway.

## Installation

You can install the package via npm:

```
npm install react-marketing-poopup

```

or

```
yarn add react-marketing-poopup

```

## How to use

```
import React from 'react';
import { ToastWrapper, toast } from 'react-marketing-poopup';

const App = () => {
  const handleButtonClick = () => {
    toast.trigger({
      imagePath: "/twitter.png",
      title: 'Limited Time Offer!',
      description: 'Get 20% off on all purchases today only. Don\'t miss out!',
      time: '2h',
    });
  };

  return (
    <div className="App">
      <h1>Welcome to My Website</h1>
      <button onClick={handleButtonClick}>Show PoopUp</button>
      <ToastWrapper position="top-right" />
    </div>
  );
};

export default App;
```

## Contributing

We welcome contributions from the community! Feel free to open issues or submit pull requests to help improve React PoopUp and make it even more effective.
