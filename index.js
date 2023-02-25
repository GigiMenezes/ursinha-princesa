const info = [
	{
		nome: "Personalizados Ursinha Princesa",
		video: "lhaT_3df3u0",
		link: "https://beacons.ai/laynnefest",
		download: "https://mega.nz/folder/H88VwTpL#xAUykxwDzTXmSSZw5iF1xA",
	},
];
const title = document.getElementById("title");
title.innerHTML = info[0].nome;
const content = document.getElementById("content");

content.innerHTML = `
            <div id="conteudo">
                <h3>Obrigado por baixar nosso molde!</h3>
				<h1>${info[0].nome}</h1>
				<div id="frame">
                <iframe src="https://www.youtube.com/embed/${info[0].video}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div id="buttons">
				<button class="contato"><a href="${info[0].link}">Contato</a></button>
				<button class="download"><a href="${info[0].download}">Download</a></button></div>
                
			</div>
`;
