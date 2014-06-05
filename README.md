##custom-angularjs-slider


Custom AngularJS slider directive to work on most mobile devices, including Windows powered mobile devices.

##Usage

Once you've checked that everything is in place, you can use this directive like so:

```html
<custom-js-slider range-interval="150" min-range="100" max-range="1000" range-increment-flag="true"></custom-js-slider>
```

##Parameters

range-interval, min-range, max-range -> Scope controlled values


range-increment-flag
It takes a boolean value. True means that the slider will automatically apply an incrementation taking maximum value into account.
For instance, when set to true, the incrementation will be done like so:

* max-range >= 10 -> incrementation by 1
* max-range >= 100 -> incrementation by 10
* max-range >= 1000 -> incrementation by 100
* max-range >= 100000 -> incrementation by 1000
* and so on

##Tested on:
* HTC One - Android v4.4.2 - Native browser v5.8.2 - Chrome browser v35.0.1916.138
* HTC One XL - Android v4.1.1 - Native browser v4.51 - Chrome browser v35.0.1916.138
* Sony Xperia Z 4G C6603 - Android v4.3 - Chrome browser v35.0.1916.138
* Sony Xperia T LT30p - Android v4.1.2 - Native browser v1.0.1 - Chrome browser v18.0.1025460
* Nokia Lumia 925 PureView - Windows Phone 8.0.10328.78 - IE 10 Mobile
* Samsung Note 2 GT-N7105 - Android v4.1.2 - Native browser v4.1.2 - Chrome browser v35.0.1916.138
* LG Optimus LG-P880 - Android v4.1.2 - Native browser v4.1.41104
* Blackberry Q10 - Software v10.2.0.415
* iPhone 5 - iOS v7.1.1
* iPhone 4

##Demo

http://plnkr.co/edit/pwadYF9OBiPPeRz9cgmh?p=linter
