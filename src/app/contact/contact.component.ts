import { Component } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {

    constructor(private offcanvasService: NgbOffcanvas) {}

    open() {
      const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);

    }
  }

@Component({
	selector: 'app-contact',
	standalone: true,
	template: `


<div class="container-fluid bg-dark">
<div class="offcanvas-header">
			<h2 class="offcanvas-title text-light">Party Orders</h2>
			<button
				type="button"
				class="btn-close text-reset bg-light"
				aria-label="Close"
				(click)="activeOffcanvas.dismiss('Cross click')"
			></button>
		</div>
    <p class="text-light">Fill the Form our team will reach out to u</p>

  <form >
    <div class="form-row d-flex p-1">
      <div class="col-md-12">

        <div class="col-md-12">
          <div class="form-group col-md-8 p-1">
            <label for="inputName" class="text-light">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Full name">
          </div>
          <div class="form-group col-md-8 p-1">
            <label for="inputEmail4" class="text-light">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
          </div>
        </div>
        <div class="form-group col-md-10 p-1">
          <label for="inputAddress" class="text-light">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="form-group col-md-10 p-1">
          <label for="inputAddress2" class="text-light">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="form-row">
          <div class="form-group col-md-10 p-1">
            <label for="inputCity" class="text-light">City</label>
            <input type="text" class="form-control" id="inputCity">
          </div>
          <div class="form-group col-md-8 p-1">
            <label for="inputState" class="text-light">State</label>
            <input type="text" class="form-control" id="inputstate">
          </div>
          <div class="form-group col-md-5 p-1">
            <label for="inputZip" class="text-light">Zip code</label>
            <input type="text" class="form-control" id="inputZip">
          </div>
          <button type="submit" class="btn btn-primary m-2">Submit</button>
        </div>
      </div>
      </div>


  </form>



		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<button
				type="button"
				class="btn-close text-reset"
				aria-label="Close"
				(click)="activeOffcanvas.dismiss('Cross click')"
			></button>
		</div>
		<div class="offcanvas-body">

			<button type="button" class="btn btn-outline-dark" (click)="activeOffcanvas.close('Close click')">Close</button>
		</div>
	`,
})

export class NgbdOffcanvasContent {


	constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}





