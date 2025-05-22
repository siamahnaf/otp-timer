<br/>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780157/Personal%20Logo/logo-white_e6fujz.png">
  <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png">
  <img alt="Siam Ahnaf" src="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png" height="auto" width="240">
</picture> 
<br/> <br/>


# @siamf/otp-timer

A simple and customizable react otp timer & input component with typescript support. very simple and more customizable design and smallest bundle size. You can use this component into any react and nextjs projects.

<a href="https://www.buymeacoffee.com/siamahnaf" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

- SSR Friendly
- Customizable
- TypeScript Support
- Smallest Bundle Size(About 13kb)
- Otp Timer & Otp Input Component


## Installation

```shell-script
$ npm i @siamf/otp-timer
```

## Demo

<img src="https://res.cloudinary.com/dub0dpenl/image/upload/v1672334376/otp-timer-ts_f8ebe8.gif" alt="Girl in a jacket" width="250">

## Usage?

### `OtpTimer` Component

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

### `OtpInput` Component

```javascript
import { useState } from "react";
import { OtpInput } from "@siamf/otp-timer";

export default function App() {
  const [otp, setOtp] = useState<string>(");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
  );
}
```

# Customization

## `OtpTimer` component

### Options

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


### Styling

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

## `OtpInput` component

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numInputs</td>
    <td>number</td>
    <td>true</td>
    <td>4</td>
    <td>Number of OTP inputs to be rendered.</td>
  </tr>
  <tr>
    <td>renderInput</td>
    <td>function</td>
    <td>true</td>
    <td>none</td>
    <td>A function that returns the input that is supposed to be rendered for each of the input fields. 
      The function will get two arguments: <code>inputProps</code> and <code>index</code>. <code>inputProps</code> is an object that contains all the props <b>that should be passed to the input being rendered</b> (Overriding these props is not recommended because it might lead to some unexpected behaviour). <code>index</code> is the index of the input being rendered.
    </td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td>true</td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
  <tr>
    <td>onPaste</td>
    <td>function</td>
    <td>false</td>
    <td>none</td>
    <td>Provide a custom onPaste event handler scoped to the OTP inputs container. Executes when content is pasted into any OTP field.
    </br></br>
    Example:
    <pre>
const handlePaste: React.ClipboardEventHandler<HTMLDivElement> = (event) => {
  const data = event.clipboardData.getData('text');
  console.log(data)
};</pre>

  </td>
  </tr>
  <tr>
    <td>value</td>
    <td>string / number</td>
    <td>true</td>
    <td>''</td>
    <td>The value of the OTP passed into the component.</td>
  </tr>
    <tr>
     <td>placeholder</td>
     <td>string</td>
     <td>false</td>
     <td>none</td>
     <td>Specify an expected value of each input. The length of this string should be equal to <code>numInputs</code>.</td>
   </tr>
  <tr>
    <td>renderSeparator</td>
    <td>component / function<br/></td>
    <td>false</td>
    <td>none</td>
    <td>Provide a custom separator between inputs by passing a component. For instance, <code>&lt;span&gt;-&lt;/span&gt;</code> would add <code>-</code> between each input.</td> You can also pass a function that returns a component, where the function will get the index of the separator being rendered as an argument.
  </tr>
  <tr>
    <td>containerStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to container of inputs.</td>
  </tr>
  <tr>
    <td>inputStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input.</td>
  </tr>
  <tr>
    <td>inputType</td>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types">&lt;input&gt; type<a></td>
    <td>false</td>
    <td>text</td>
    <td>The type of the input that will be passed to the input element being rendered. In v2 <code>isInputNum</code> used to set the input type as <code>tel</code> and prevented non numerical entries, so as to avoid the spin buttons added to the inputs with input type <code>number</code>. That behaviour is still supported if you pass <code>tel</code> to the inputType prop.</td>
  </tr>
  <tr>
    <td>shouldAutoFocus</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Auto focuses input on initial page load.</td>
  </tr>
  <tr>
    <td>skipDefaultStyles</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>The component comes with default styles for legacy reasons. Pass <code>true</code> to skip those styles. This prop will be removed in the next major release.</td>
  </tr>
</table>

## Issues

You are welcome to create an issue.

## Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Github - [https://github.com/siamahnaf](https://github.com/siamahnaf)