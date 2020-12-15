// Status bar class
class status_divs {
  contstr   = 'status_svg_container';
  status    = null;
  constr    = 'col-md-2';
  innerhtml = null;
  imgicon   = null;                             // "fonts/thermometer-half-solid.svg"
  constructor(make,model,year,cost,color) {
      this.contstr   = 'status_svg_container';
      this.Status    = 1;                       // -1 = caution, 1 = good, 0 = bad, 10 = neutral
      this.colstr    = 'col-md-2';
      this.innerhtml = innerhtml;               // <strong>B array temp</strong><hr>-30.8384 C
      this.imgicon   = imgicon;
  }
  display () {
      const body = document.getElementsByTagName('body')[0];
      
      const ul = document.createElement('ul');
      body.appendChild(ul);
      
      const li = document.createElement('li');
      li.innerHTML = this.year + ' ' + this.make + ' ' + this.model;
      ul.appendChild(li);

      const li2 = document.createElement('li');
      li2.innerHTML = `<img width="100px" height="100px" src="https://source.unsplash.com/random/100×100/?car" alt=""></img>`;
      ul.appendChild(li2);
      
      const li3 = document.createElement('li');
      li3.innerHTML = 'Cost: $' + this.cost;
      ul.appendChild(li3);

      const li4 = document.createElement('li');
      li4.innerHTML = 'Color: ' + this.color;
      ul.appendChild(li4);

      const hr = document.createElement('hr');
      body.appendChild(hr);
      
  }
}
