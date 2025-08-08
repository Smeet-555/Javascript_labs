function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

function Hero() {
  return (
    <>
    {/* card1 */}
      <div className="herosection" >
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/objects3d/2025/07/11/04-09-04-692/render_720_720_0_340_0.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    {/* card2 */}
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/objects3d/2025/07/11/04-09-04-692/render_720_720_0_340_0.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>

      {/* card3 */}
        <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/objects3d/2025/07/11/04-09-04-692/render_720_720_0_340_0.png" className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>

      {/* card4 */}

      <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn.pixabay.com/objects3d/2025/07/11/04-09-04-692/render_720_720_0_340_0.png" className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

function Form(){
  return(
    <>
    <div className="formclass">
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
</div>

<div class="input-group">
  <span class="input-group-text">With textarea</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
</div>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2025 Company</p>
        <p className="mb-0">
          <a href="#" className="text-white text-decoration-none mx-2">Privacy Policy</a> |
          <a href="#" className="text-white text-decoration-none mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}



export {Header , Hero , Footer , Form};