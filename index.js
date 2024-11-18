import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.8.0' //load transformers 

const status = document.getElementById('status')
const image = document.getElementById('image')

// Load model and create a new object detection pipeline
status.textContent = 'Loading model...'
const detector = await pipeline('object-detection', 'Xenova/yolos-tiny')


status.textContent = 'Detecting Objects...'

const detectedObjects = await detector(image.src)
detectedObjects.forEach(object => {
    console.log(object)
})

status.textContent = 'Done!'