# jQuery Toggle Password Plugin 👁

**jQuery Toggle Password Plugin** is a lightweight jQuery plugin that allows users to toggle the visibility of password fields in web forms with a single click.

## Features

- Easily toggle password visibility for password input fields.
- Customizable icons for show/hide states.
- Simple integration into existing web forms.

### Include directly in HTML

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="toggle-password.js"></script>
<link rel="stylesheet" href="toggle-password.css">
```

## Usage

1. Add the necessary HTML for your password input fields and include Font Awesome for icons (if not already included):

```html
<input type="password" class="toggle-password" id="password" placeholder="Password">
```

2. Call the plugin on the password input fields:

```JavaScript
$('.toggle-password').togglePassword({
    show: 'fa-eye',
    hide: 'fa-eye-slash',
    base: 'fa fa-fw toggle-password-button'
});
```

## Options

The plugin supports the following options:

- `show` (string): The Font Awesome class for the icon to show the password (default: 'fa-eye').
- `hide` (string): The Font Awesome class for the icon to hide the password (default: 'fa-eye-slash').
- `base` (string): Additional classes for the toggle button (default: 'fa fa-fw toggle-password-button').

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
