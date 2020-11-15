import { Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html'
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  //To get a reference to <ng-template adHost></ng-template>
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {

    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    //Needs componentFactory to create an instance of each component.
    //An AdItem is -> new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    /**
     * Next, you're targeting the viewContainerRef that exists on this specific instance of the component.
     * How do you know it's this specific instance? Because it's referring to adHost and adHost is the directive
     * you set up earlier to tell Angular where to insert dynamic components.
     * As you may recall, AdDirective injects ViewContainerRef into its constructor.
     * This is how the directive accesses the element that you want to use to host the dynamic component.
     */
    const viewContainerRef = this.adHost.viewContainerRef;
    /**
     * Clear already added ads in the view. Otherwise ads will pileup.
     */
    viewContainerRef.clear();

    //To add the component to the template, you call createComponent() on ViewContainerRef.
    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
  /** The createComponent() method returns a reference to the loaded component.
   * Use that reference to interact with the component by assigning to its properties or calling its methods.
   * */
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
