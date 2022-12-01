function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell24name").textContent = "blooming...";
}

var square = [];

square[0] = new Square("", "", "#f8f9f1");
square[1] = new Square("ㅤCuricicaㅤ", "$60", "#4B0082", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Sorte-reves", "", "#f8f9f1");
square[3] = new Square("ㅤㅤLemeㅤㅤ", "$60", "#4B0082", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("ㅤPropinaㅤ" , "Pague $200", "#f8f9f1");
square[5] = new Square("Caça niquel", "$200", "#f8f9f1", 200, 1);
square[6] = new Square("Vilar carioca", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Sorte-reves", "", "#f8f9f1");
square[8] = new Square("Morro do 18", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Amarelinho", "$120", "#AACCFF", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("", "", "#f8f9f1");
square[11] = new Square("ㅤGuaporeㅤ", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Transporte Alterativo", "$150", "#f8f9f1", 150, 2);
square[13] = new Square("ㅤTanqueㅤ", "$140", "purple", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("ㅤBotafogoㅤ", "$160", "purple", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Segurança", "$200", "#f8f9f1", 200, 1);
square[16] = new Square("ㅤㅤBatanㅤㅤ", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Sorte-reves", "", "#f8f9f1");
square[18] = new Square("ㅤBarbanteㅤ", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("ㅤVidigalㅤ", "$200", "orange", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("", "", "#f8f9f1");
square[21] = new Square("Gardênia Azul", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Sorte-reves", "", "#f8f9f1");
square[23] = new Square("Caixa D'agua", "$220", "red", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("ㅤKelson'sㅤ", "$240", "red", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("ㅤMoto-taxiㅤ", "$200", "#f8f9f1", 200, 1);
square[26] = new Square("ㅤQuitungoㅤ", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Rio das pedras", "$260", "yellow", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Botijão de gás", "$150", "#f8f9f1", 150, 2);
square[29] = new Square("Cidade de Deus", "$280", "yellow", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("", "", "#f8f9f1");
square[31] = new Square("ㅤCarobinhaㅤ", "$300", "green", 300, 9, 26, 130, 390, 900, 110, 1275);
square[32] = new Square("ㅤFumacêㅤ", "$300", "green", 300, 9, 26, 130, 390, 900, 110, 1275);
square[33] = new Square("Sorte-reves", "", "#f8f9f1");
square[34] = new Square("Cidade alta", "$320", "green", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("ㅤGato NETㅤ", "$200", "#f8f9f1", 200, 1);
square[36] = new Square("Sorte-reves", "", "#f8f9f1");
square[37] = new Square("ㅤㅤFubáㅤㅤ", "$350", "blue", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Campanha", "Pague $200", "#f8f9f1");
square[39] = new Square("ㅤRocinhaㅤ", "$400", "blue", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Saída livre da prisão com o auxilio de falsos agentes penitenciários. (Guarde este cartão para quando for preciso ou negocie-o em qualquer ocasião por preço a combinar).", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Todos ficamos muito comovidos com o falecimento do seu Dimas, mas não tem jeito: pra enterrar vai ter que pagar. Receba R$25", function() { addamount(25, 'Chance');});
communityChestCards[2] = new Card("De quem foi a ideia de uniformizar a rapaziada com boné de grife?. Pague R$25", function() { subtractamount(25, 'Community Chest');});
communityChestCards[3] = new Card("Você fez uma pontinha num seriado de TV. Parabéns! Receba R$50", function() { addamount(50, 'Chance');});
communityChestCards[4] = new Card("Você aproveitou o feriado para visitar um amigo na Região dos Lagos. Pague R$45", function() { subtractamount(45, 'Community Chest');});
communityChestCards[5] = new Card("Chegou o verão no Rio de Janeiro e o bar da rapaziada está precisando de um ar condicionado novo. Pague R$45", function() { subtractamount(45, 'Community Chest');});
communityChestCards[6] = new Card("Os advogados estão lapidando seu patrimônio. Era melhor ter andado na linha a se meter com essa gente! Pague R$30", function() { subtractamount(30, 'Community Chest');});
communityChestCards[7] = new Card("A bandidagem está se matando e aliviando o trabalho da turma. Alugue mais vezes seu revolver. Receba R$20", function() { addamount(20, 'Chance');});
communityChestCards[8] = new Card("O portão novo da comunidade ficou uma beleza, mas vai custar aquele cascalho. Pague R$40", function() { subtractamount(40, 'Community Chest');});
communityChestCards[9] = new Card("Dia de São Jorge em Quintino e as barracas estão vendendo até promeça de politico. Receba R$100", function() { addamount(100, 'Chance');});
communityChestCards[10] = new Card("O seguro de incência do transporte alternativo da sua comunidade aumentou, mas quem recolhe ele é você! Receba R$80", function() { addamount(80, 'Chance');});
communityChestCards[11] = new Card("A comunidade deu aquela força pro candidato, mas ele não se elegeu e acabou de mandar aquela conta da campanha. Pague R$50", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("A central de TV ta precisando de reparos e a Anatel não vai ajudar. Pague R$30", function() { subtractamount(30, 'Community Chest');});
communityChestCards[13] = new Card("O micreiro que fez os banners da campanha caprichou no degradê e no orçamento. Pague $R30", function() { subtractamount(30, 'Community Chest');});
communityChestCards[14] = new Card("Sua Toyota Hilux está pedindo tapetes novos. Pague R$25", function() { subtractamount(25, 'Community Chest');});
communityChestCards[15] = new Card("A fiscalização apertou e esse mês não foi possível batizar a gasolina no posto do Marcão. Pague R$100", function() { subtractamount(100, 'Community Chest');});
communityChestCards[16] = new Card("A feijoada de lançamento do grupo ficou uma delícia. Já a conta... acabou bem salgada. Pague R$50", function() { subtractamount(50, 'Community Chest');});
communityChestCards[17] = new Card("As eleições vêm ai, mas esse papo de propaganda eleitoral gratuita é só na televisão. Pra fazer campanha vai ter que pagar! Receba R$150", function() { addamount(150, 'Chance');});
communityChestCards[18] = new Card("O serviço de internet banda magra está bombando a Lan House da firma. E a grana não é virtual! Receba R$100", function() { addamount(100, 'Chance');});
communityChestCards[19] = new Card("Sistema de encanamento da comunidade funciona que é uma maravilha. Receba R$50 de cada jogador.", function() { collectfromeachplayer(50, 'Community Chest');});
communityChestCards[20] = new Card("A casa caiu: você foi acusado na CPI das milícias e vai tirar férias em Bangu. Vá para prisão sem receber nada. (talvez eu faça uma visita...)", function() { gotojail();});

chanceCards[0] = new Card("Saída livre da prisão com o auxilio de falsos agentes penitenciários. (Guarde este cartão para quando for preciso ou negocie-o em qualquer ocasião por preço a combinar).", function() { p.communityChestJailCard = true; updateOwned();});
chanceCards[1] = new Card("Todos ficamos muito comovidos com o falecimento do seu Dimas, mas não tem jeito: pra enterrar vai ter que pagar. Receba R$25", function() { addamount(25, 'Chance');});
chanceCards[2] = new Card("De quem foi a ideia de uniformizar a rapaziada com boné de grife?. Pague R$25", function() { subtractamount(25, 'Community Chest');});
chanceCards[3] = new Card("Você fez uma pontinha num seriado de TV. Parabéns! Receba R$50", function() { addamount(50, 'Chance');});
chanceCards[4] = new Card("Você aproveitou o feriado para visitar um amigo na Região dos Lagos. Pague R$45", function() { subtractamount(45, 'Community Chest');});
chanceCards[5] = new Card("Chegou o verão no Rio de Janeiro e o bar da rapaziada está precisando de um ar condicionado novo. Pague R$45", function() { subtractamount(45, 'Community Chest');});
chanceCards[6] = new Card("Os advogados estão lapidando seu patrimônio. Era melhor ter andado na linha a se meter com essa gente! Pague R$30", function() { subtractamount(30, 'Community Chest');});
chanceCards[7] = new Card("A bandidagem está se matando e aliviando o trabalho da turma. Alugue mais vezes seu revolver. Receba R$20", function() { addamount(20, 'Chance');});
chanceCards[8] = new Card("O portão novo da comunidade ficou uma beleza, mas vai custar aquele cascalho. Pague R$40", function() { subtractamount(40, 'Community Chest');});
chanceCards[9] = new Card("Dia de São Jorge em Quintino e as barracas estão vendendo até promeça de politico. Receba R$100", function() { addamount(100, 'Chance');});
chanceCards[10] = new Card("O seguro de incência do transporte alternativo da sua comunidade aumentou, mas quem recolhe ele é você! Receba R$80", function() { addamount(80, 'Chance');});
chanceCards[11] = new Card("A comunidade deu aquela força pro candidato, mas ele não se elegeu e acabou de mandar aquela conta da campanha. Pague R$50", function() { subtractamount(50, 'Community Chest');});
chanceCards[12] = new Card("A central de TV ta precisando de reparos e a Anatel não vai ajudar. Pague R$30", function() { subtractamount(30, 'Community Chest');});
chanceCards[13] = new Card("O micreiro que fez os banners da campanha caprichou no degradê e no orçamento. Pague $R30", function() { subtractamount(30, 'Community Chest');});
chanceCards[14] = new Card("Sua Toyota Hilux está pedindo tapetes novos. Pague R$25", function() { subtractamount(25, 'Community Chest');});
chanceCards[15] = new Card("A fiscalização apertou e esse mês não foi possível batizar a gasolina no posto do Marcão. Pague R$100", function() { subtractamount(100, 'Community Chest');});
chanceCards[16] = new Card("A feijoada de lançamento do grupo ficou uma delícia. Já a conta... acabou bem salgada. Pague R$50", function() { subtractamount(50, 'Community Chest');});
chanceCards[17] = new Card("As eleições vêm ai, mas esse papo de propaganda eleitoral gratuita é só na televisão. Pra fazer campanha vai ter que pagar! Receba R$150", function() { addamount(150, 'Chance');});
chanceCards[18] = new Card("O serviço de internet banda magra está bombando a Lan House da firma. E a grana não é virtual! Receba R$100", function() { addamount(100, 'Chance');});
chanceCards[19] = new Card("Sistema de encanamento da comunidade funciona que é uma maravilha. Receba R$50 de cada jogador.", function() { collectfromeachplayer(50, 'Community Chest');});
chanceCards[20] = new Card("A casa caiu: você foi acusado na CPI das milícias e vai tirar férias em Bangu. Vá para prisão sem receber nada. (talvez eu faça uma visita...)", function() { gotojail();});
