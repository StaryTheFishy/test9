console.log("hello world!");

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var content = document.getElementById('content');
  client.getEntry(id).then(function (entry) {
    console.log(entry.fields.mainImage.fields.file.url)
        



    console.log(entry);
    var mainImage = document.createElement('img');
    mainImage.classList.add('details-main-image')
    if (entry.fields.mainImage){
        var hero = document.createElement('div');
        hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
        
        mainImage.src = entry.fields.mainImage.fields.file.url;
        content.append(mainImage);
    }

    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    name.classList.add('details-h3')
    content.appendChild(name);

    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    description.classList.add('details-p')
    content.appendChild(description);

    var gallery = document.createElement('div');
    gallery.classList.add('gallery');
    entry.fields.gallery.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        gallery.appendChild(img);
    });
    content.appendChild(gallery);

    console.log(entry.fields.developerImage.fields.file.url)
    var developerImage = document.createElement('img');
    developerImage.classList.add('developer-image')
    if (entry.fields.developerImage){
        developerImage.src = entry.fields.developerImage.fields.file.url;
        content.append(developerImage);
    }

    var developerName = document.createElement('h2');
    developerName.innerHTML = entry.fields.developerName;
    developerName.classList.add('developer-name');
    content.appendChild(developerName);

    var aboutDeveloper = document.createElement('p');
    aboutDeveloper.innerHTML = entry.fields.aboutDeveloper;
    developerName.classList.add('about-developer');
    content.appendChild(aboutDeveloper);

    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });

    });

