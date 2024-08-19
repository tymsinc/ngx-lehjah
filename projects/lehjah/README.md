# ngx-lehjah

`ngx-lehjah` is an Angular package that allows you to embed the Lehjah widget in your Angular application via an iframe. This package makes it easy to integrate Lehjah's powerful accounting system directly into your Angular app.

## Installation

Install the package using npm:

```bash
npm install ngx-lehjah
```

## Usage

<!-- Import the `LehjahModule` into your application's module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LehjahModule } from 'ngx-lehjah';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LehjahModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
``` -->

In your component template, use the `ngx-lehjah-widget` component to embed the widget:

```html
<ngx-lehjah-widget 
    [business_id]="'your-business-id'"
    [public_key]="'your-public-key'"
    [token]="'your-token'"
    [environment]="'sandbox'"  <!-- or 'production' -->
    [width]="'100%'"
    [height]="'500px'">
</ngx-lehjah-widget>
```

### Parameters

- **`business_id`**: (string) The unique ID of the business on your platform. This is required.
- **`public_key`**: (string) Your Lehjah developer public key. This is required.
- **`token`**: (string) The user authentication token on your platform (e.g., Bearer token). This is required.
- **`environment`**: (string) The environment to use. It can be either `sandbox` or `production`. Defaults to `sandbox`.
- **`width`**: (string) The width of the iframe. Defaults to `'100%'`.
- **`height`**: (string) The height of the iframe. Defaults to `'100%'`.

## Example

```html
<ngx-lehjah-widget 
    [business_id]="'abc123'"
    [public_key]="'pk_test_abcdef'"
    [token]="'Bearer your-token-here'"
    [environment]="'sandbox'"
    [width]="'100%'"
    [height]="'600px'">
</ngx-lehjah-widget>
```

To request access to Lehjah sandbox, visit [https://cal.com/lehjah/request-access](https://cal.com/lehjah/request-access).

## License

This project is licensed under the MIT License.

