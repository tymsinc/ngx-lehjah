import { Component, Input, OnInit } from '@angular/core';
import { SafeUrlPipe } from "../safe-url.pipe";

@Component({
  selector: 'ngx-lehjah',
  standalone: true,
  imports: [SafeUrlPipe],
  template: `<iframe [src]="iframeSrc | safeUrl" [width]="width"
  [height]="height"
  frameborder="0"
  style="border: none;"></iframe>`,
  styleUrl: './lehjah.component.css'
})
export class LehjahComponent {
  @Input() business_id!: string;
  @Input() public_key!: string;
  @Input() token!: string;
  @Input() environment: 'sandbox' | 'production' = 'production';
  @Input() width: string = '100%';
  @Input() height: string = '100%';

  iframeSrc!: string;

  ngOnInit(): void {
      const baseUrl = this.environment === 'sandbox'
          ? 'https://sandbox-widget.lehjah.com'
          : 'https://widget.lehjah.com';

      this.iframeSrc = `${baseUrl}/v1/app/${this.public_key}?business_id=${this.business_id}&token=${this.token}`;
  }
}
