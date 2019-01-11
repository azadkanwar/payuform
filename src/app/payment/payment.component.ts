import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payuform: any = {};
  disablePaymentButton = true;
  constructor(private http: HttpClient) { }

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    };
    // return this.http.post<any>('http://localhost:8080/payment/payment-details', paymentPayload).subscribe(
    //   data => {
      // console.log(data);
      this.payuform.txnid = 'sdfsfsf'; // data.txnId;
      this.payuform.surl = 'fdsfsf'; // data.sUrl;
      this.payuform.furl = 'adasdad'; // data.fUrl;
      this.payuform.key = 'sadasd' ; // data.key;
      this.payuform.hash = 'sfsfsf'; // data.hash;
      this.payuform.txnid = 'sfsf0'; // data.txnId;
        this.disablePaymentButton = false;
    // }, error1 => {
    //     console.log(error1);
    //   });
  }

  ngOnInit() {
  }


}
