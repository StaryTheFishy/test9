console.log("hello world!");
var client = contentful.createClient({
    space: 'f7mp64jz9fcp',
    accessToken: 'UWiDchefAhl13tJ2Vh9UkgZeKVZaMmHgap4vtd6bp7U',
});

var content = document.getElementById('index-content');

client.getEntries({content_type: 'videoGames',}).then(function (entries) {
    entries.items.forEach(function (entry) {

        var contentDiv = document.createElement('div');
        var name = document.createElement('h3');
        var buttonText = document.createElement('button');
        name.innerHTML = entry.fields.name;
        buttonText.innerHTML = entry.fields.buttonText;
        contentDiv.append(name);
        content.append(contentDiv);
        content.append(buttonText);

        var description = document.createElement('p');
        description.innerHTML = entry.fields.description;
        contentDiv.append(description);

        console.log(entry.fields.mainImage.fields.file.url)
        var mainImage = document.createElement('img');
        mainImage.classList.add('main-image')
        if (entry.fields.mainImage){
            var hero = document.createElement('div');
            hero.style.backgroundImage = entry.fields.mainImage.fields.file.url;
            mainImage.src = entry.fields.mainImage.fields.file.url;
            contentDiv.append(mainImage);
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'details.html?id=' + entry.sys.id;
        linkToDetails.appendChild(buttonText);
        
        contentDiv.appendChild(name);
        contentDiv.appendChild(description);
        contentDiv.appendChild(linkToDetails);
        content.appendChild(contentDiv);

    });

    document.getElementById("menu-toggle").addEventListener("click", function(){
        document.getElementById("menu").classList.toggle("active");
    });
    
});
