function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", ( ) =>{
    const uploadImage = reader.result
    document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    })
    reader.readAsDataURL(this.files[0])
 })
}

async function mapImageList(){
    const memesObject = [
        {
          "name": "cansado",
          "path": "pictures/cansado.gif"
        },
        {
          "name": "urso",
          "path": "pictures/urso.gif"
        },
        {
          "name": "cat_felix",
          "path": "pictures/cat_felix.gif"
        },
        {
          "name": "aquario_2",
          "path": "pictures/aquario_2.gif"
        },
        {
           "name": "lulus_2",
           "path": "pictures/lulus_2.gif"
        },
        {
            "name": "max",
            "path": "pictures/max.gif"
        },
        {
            "name": "olha_eu",
            "path": "pictures/olha_eu.gif"
        },
        {
            "name": "gugu",
            "path": "pictures/gugu.gif"
        },

        {
            "name": "fofo_demais",
            "path": "pictures/fofo_demais.gif"
        },

        {
            "name": "fofo_demais2",
            "path": "pictures/fofo_demais2.gif"
        },

        {
            "name": "burro_hahah",
            "path": "pictures/burro_hahah.gif"
        },

        


    ]

    return memesObject
}
async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()