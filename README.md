# Gilded Rose Setup

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.  Some of this documentation was taken directly from the original README.md generated by the CLI.

To install the Angular Command Line Interface, run `npm install -g angular-cli`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Exercise Questions

## General overview
I decided to go with Angular 2 as an exercise to increase my skills and make sure the transition from developing in Angular 1 would be smooth.  I was pleased to find this was the case.

## How it works
This is a fairly basic website, no data is persisted in a database.  There are two buttons, a populate and increment button.  The populate button populates the data with random numbers, and the increment button moves forward in time.  All of the data is held in an inventory object, which is created in an inventory service.

## Extending the system
To extend the system, it would be good to have more data in the this.inventory in the InventoryComponent class.  I would like to figure out a way to put an equation on this array for the quality and sellIn values.  Writing switch statements for each type of item is doable with 5, but swiftly becomes unweildy.  

## Resources
I found a lot of good resources on https://scotch.io, and leaned heavily on this article on components: https://scotch.io/tutorials/creating-your-first-angular-2-components.  Other websites I used include google search, github, and this neat color picker tool: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool

## Third party libraries
I didn't choose to use any third party libraries other than the basic ones that are installed in the angular-cli build process.

## Time
I would estimate it took me 4 hours instead of the 3 recommended.  I include watching a host (~1 hr?) of videos from this site in the 4 hour estimate: https://school.scotch.io/getting-started-with-angular-2.  If I had been developing in a more familiar framework, it would have taken less time.

## Automated testing
This project already includes basic error checking (linting) and the framework for Karma and Jasmine testing.  Ideally, I would write basic checks, as well as edge case testing to see if I could really screw things up with absurd numbers.

## Critique
I don't really like the increment() function, I feel like the switch statement is inelegant.  It works for a small number of items, but it would quickly become unmanegable.  Overall, I enjoyed working with Angular 2, the replacement of ng-repeat with ngFor is a big win for mankind.

