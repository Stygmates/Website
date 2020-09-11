import React from 'react';
const AboutMeCard = (description) => {
    console.log(description);
    return(
    <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mon titre</h5>
        <p class="card-text">{description.map(desc => <div>{desc}</div>)}</p>
      </div>
    </div>
  </div>
</div>);
}
export default AboutMeCard;