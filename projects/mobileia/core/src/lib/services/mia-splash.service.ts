import { Injectable, Inject } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MiaSplashService {

  splashScreenEl: any;
  player: AnimationPlayer;

  constructor(
    private animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private document: any
  ) {
    // Get the splash screen element
    this.splashScreenEl = this.document.body.querySelector('#mia-splash-screen');
  }

  /**
     * Show the splash screen
     */
    show(): void {
      this.player =
          this.animationBuilder
              .build([
                  style({
                      opacity: '0',
                      zIndex : '99999'
                  }),
                  animate('400ms ease', style({opacity: '1'}))
              ]).create(this.splashScreenEl);

      setTimeout(() => {
          this.player.play();
      }, 0);
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
      this.player =
          this.animationBuilder
              .build([
                  style({opacity: '1'}),
                  animate('400ms ease', style({
                      opacity: '0',
                      zIndex : '-10'
                  }))
              ]).create(this.splashScreenEl);

      setTimeout(() => {
          this.player.play();
      }, 0);
  }
}
