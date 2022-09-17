class AutoPause {
  constructor() {
    this.threshold = 0.25
    //aqui lo que hacemos es que anclamos permanentemente el this a esta clase
    this.handleIntersection = this.handleIntersection.bind(this)
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      //este es el umbral luego del 25% nos avisa
      threshold: this.threshold,
    });
    //lo ponemos a observar
    observer.observe(this.player.media)
  }
  //cuando IntersectionObserver llame a este metodo le va a pasar una lista de entries (todos los objetos que estamos observando, en este caso solo hay uno)
  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold
    //el this apunta al objeto que llama a la funcion
    //
    //aqui suelta undefined porque el this apunta a IntersectionObserver ya que es el objeto que llama a esta funcion (handleIntersection) la solucion es el bind en el constructor
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;