<br/>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780157/Personal%20Logo/logo-white_e6fujz.png">
  <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png">
  <img alt="Siam Ahnaf" src="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png" height="auto" width="240">
</picture> 
<br/> <br/>


# @siamf/otp-timer

A simple and customizable react otp timer component with typescript support. very simple and more customizable design and smallest bundle size about 13kb. You can use this component into any react and nextjs projects.

<a href="https://www.buymeacoffee.com/siamahnaf" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

- SSR Friendly
- Customizable
- TypeScript Support
- Smallest Bundle Size(About 13kb)


## Installation

```shell-script
$ npm i @siamf/otp-timer
```

## Demo

<img src="https://res.cloudinary.com/dub0dpenl/image/upload/v1672334376/otp-timer-ts_f8ebe8.gif" alt="Girl in a jacket" width="250">

## Usage?

```javascript
import { Otptimer } from "@siamf/otp-timer";

const MyComponent = () => {

  const handleResend = () => {
    //desired function to be performed on clicking resend button
  }

  return (
    <div>
      <Otptimer minutes={0} seconds={5} onResend={handleResend} />
    </div>
  );
};

export default MyComponent;
```

## Options

|name|Description|Default Value|
|:---:| :-------------:|:-----------:|
|seconds|number of seconds for which timer must be set|30|
|minutes|number of minutes for which the timer must be set|0|
|onResend|function that would get triggered on clicking the resend button|n/a|
|text|content that you want to put down|Resend otp in|
|ButtonText|button text|Resend|
|showSpinner|If you want to show any button loading|false|
|fetching|If you want to show any button loading icon with fetching state|false|
|spinnerComponent|Your custom spinner component for render|null|


## Styling

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> containerClass </td>
    <td> string </td>
    <td> timer Container class name </td>
  </tr>
  <tr>
    <td> textClass </td>
    <td> string </td>
    <td> text class name </td>
  </tr>
  <tr>
    <td> timerClass </td>
    <td> string </td>
    <td> timer class name </td>
  </tr>
  <tr>
    <td> buttonContainerClass </td>
    <td> string </td>
    <td> button container class </td>
  </tr>
  <tr>
    <td> buttonClass </td>
    <td> string </td>
    <td> button class </td>
  </tr>
  <tr>
    <td> buttonStyle </td>
    <td> CSSProperties </td>
    <td> styles for resend button </td>
  </tr>
  <tr>
    <td> buttonContainerStyle </td>
    <td> CSSProperties </td>
    <td> styles for resend button container </td>
  </tr>
  <tr>
    <td> textStyle </td>
    <td> CSSProperties </td>
    <td> styles for text </td>
  </tr>
  <tr>
    <td> timerStyle </td>
    <td> CSSProperties </td>
    <td> styles for timer </td>
  </tr>
  <tr>
    <td> textContainerStyle </td>
    <td> CSSProperties </td>
    <td> styles for timer text container </td>
  </tr>
</table>

## Issues

You are welcome to create an issue.

## Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Github - [https://github.com/siamahnaf](https://github.com/siamahnaf)