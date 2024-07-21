export const horizantalFRMotion={
    
initial:{opacity:0,
    x:100,
  },
  whileInView:{opacity:[0,.3,0.5,0.7,0.8,.9,1],
    x:[200,150,100,50,25,12,6,3,2,1,0],
  },
  transition:{
    duration:2,
    ease:'linear',
  },
  viewport:{once:true},
}
export const verticalFRmotion={
    
initial:{opacity:0,
    y:100,
  },
  whileInView:{opacity:[0,.3,0.5,0.7,0.8,.9,1],
    y:[200,150,100,50,25,12,6,3,2,1,0],
  },
  transition:{
    duration:2,
    ease:'linear',
  },
  viewport:{once:true},
}