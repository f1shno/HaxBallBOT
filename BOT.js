var room = HBInit({
	roomName: "Arena Sniper | Sniper 1x1 / 2x2", // Define nome da sala
	maxPlayers: 10, // Define número máximo de players na sala
	noPlayer: true, // Tira o Host da sala
	public: true, //Server aparece na lista pública
	password: "Senha", // Define uma senha
	geo: { "code": 'br', "lat": -19.912998, "lon": -43.940933 } //Geolocalização da sala
});



	

/* ESTÁDIO 2X2 */
var stadiumx2 = `{

{"name":"Sniper Shoot v3 by Jesus Navas from HaxMaps","width":425,"height":200,"spawnDistance":170,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":-170,"trait":"kickOffBarrier","cMask":["wall"],"color":"f708ff"},{"x":-371,"y":-144,"trait":"goalNet","curve":-190,"color":"ff0000"},{"x":-375,"y":-105,"trait":"goalNet","curve":-190,"color":"ff0000"},{"x":370,"y":-143,"trait":"goalNet","curve":190,"color":"ff0000"},{"x":370,"y":-106,"trait":"goalNet","curve":190,"color":"ff0000"},{"x":-370,"y":-38,"trait":"goalNet","curve":-190,"bCoef":1,"color":"ffffff"},{"x":-374,"y":35,"trait":"goalNet","curve":-190,"color":"ffffff"},{"x":-375,"y":105,"trait":"goalNet","curve":-190,"color":"ff0000"},{"x":-371,"y":143,"trait":"goalNet","curve":-190,"color":"ff0000"},{"bCoef":0.1,"cMask":["blue"],"trait":"kickOffBarrier","x":50,"y":-200,"curve":0,"vis":true,"color":"000000","cGroup":["redKO"]},{"bCoef":0.1,"cMask":["blue"],"trait":"kickOffBarrier","x":50,"y":200,"curve":0,"vis":true,"color":"000000","cGroup":["redKO"]},{"x":370,"y":104,"trait":"goalNet","curve":190,"color":"ff0000"},{"x":370,"y":142,"trait":"goalNet","curve":190,"color":"ff0000"},{"x":370,"y":-37,"trait":"goalNet","curve":190,"color":"ffffff"},{"x":370,"y":39,"trait":"goalNet","curve":190,"color":"ffffff"},{"bCoef":1,"cMask":["ball"],"trait":"goalNet","x":370,"y":142,"curve":0,"vis":false},{"bCoef":1.4,"cMask":["ball"],"trait":"goalNet","x":370,"y":170,"curve":0,"vis":false,"color":"ffffff"},{"bCoef":1.5,"cMask":["ball"],"trait":"goalNet","x":-370,"y":146,"curve":0,"vis":false},{"bCoef":1.5,"cMask":["ball"],"trait":"goalNet","x":-370,"y":170,"curve":0,"vis":false},{"bCoef":1,"cMask":["ball"],"trait":"goalNet","x":-370,"y":145,"curve":0,"vis":false},{"bCoef":1.4,"cMask":["ball"],"trait":"goalNet","x":-370,"y":170,"curve":0,"vis":false,"color":"ffffff"},{"bCoef":1,"trait":"goalPost","x":-370,"y":-103,"cMask":["ball"],"curve":1},{"bCoef":1,"trait":"goalPost","x":-371,"y":-34,"cMask":["ball"],"curve":1},{"bCoef":1.4,"cMask":["ball"],"trait":"goalNet","x":-370,"y":-170,"color":"ffffff"},{"bCoef":1.5,"cMask":["ball"],"trait":"goalPost","x":-371,"y":-143},{"bCoef":1,"cMask":["ball"],"trait":"goalNet","x":-370,"y":37,"color":"ffffff"},{"bCoef":1,"cMask":["ball"],"trait":"goalNet","x":-370,"y":99,"color":"ffffff"},{"bCoef":1.4,"cMask":["ball"],"trait":"goalNet","x":370,"y":-170,"color":"ffffff"},{"bCoef":1.52,"cMask":["ball"],"trait":"goalPost","x":370,"y":-145},{"bCoef":1,"cMask":["ball"],"trait":"goalPost","x":370,"y":-104},{"bCoef":1,"cMask":["ball"],"trait":"goalPost","x":371,"y":-37},{"bCoef":0.1,"cMask":["red"],"trait":"goalPost","x":-50,"y":-200,"curve":0,"vis":true,"color":"000000","cGroup":["blueKO"]},{"bCoef":0.1,"cMask":["red"],"trait":"goalPost","x":-50,"y":200,"curve":0,"vis":true,"color":"000000","cGroup":["blueKO"]},{"bCoef":1,"trait":"goalNet","x":370,"y":-152,"color":"ffffff"},{"cMask":["ball"],"x":-370,"y":-152,"color":"ffffff","bCoef":1,"trait":"goalNet"},{"bCoef":1,"cMask":["ball"],"trait":"goalNet","x":-370,"y":-95,"color":"000000"},{"cMask":["ball"],"trait":"goalNet","x":370,"y":152,"bCoef":1,"color":"ffffff"},{"bCoef":1,"trait":"goalNet","x":370,"y":-96,"color":"ffffff"},{"bCoef":1,"trait":"goalNet","x":370,"y":-44,"color":"ffffff"},{"bCoef":1,"trait":"goalNet","x":-370,"y":153,"color":"ffffff"},{"bCoef":1,"trait":"goalNet","x":370,"y":49,"color":"ffffff"},{"bCoef":1,"trait":"goalNet","x":370,"y":96,"color":"ffffff"},{"bCoef":0.1,"x":0,"y":170,"cMask":["wall"],"color":"f708ff"},{"x":-370,"y":-144,"trait":"goalNet","curve":0,"vis":false},{"x":-370,"y":-105,"trait":"goalNet","curve":0,"vis":false},{"x":-370,"y":-38,"trait":"goalNet","curve":0,"bCoef":1,"color":"000000","vis":false},{"x":-370,"y":35,"trait":"goalNet","curve":0,"vis":false},{"x":-370,"y":105,"trait":"goalNet","curve":0,"vis":false},{"x":-370,"y":143,"trait":"goalNet","curve":0,"vis":false},{"bCoef":0.1,"cMask":["red"],"trait":"goalPost","x":50,"y":-200,"curve":0,"vis":true,"color":"08FFD6","cGroup":["red"]},{"bCoef":0.1,"cMask":["red"],"trait":"goalPost","x":50,"y":200,"curve":0,"vis":true,"color":"08FFD6","cGroup":["red"]},{"bCoef":0.1,"cMask":["blue"],"trait":"goalPost","x":-50,"y":-200,"curve":0,"vis":true,"color":"08FFD6","cGroup":["blue"]},{"bCoef":0.1,"cMask":["blue"],"trait":"goalPost","x":-50,"y":200,"curve":0,"vis":true,"color":"08FFD6","cGroup":["blue"]}],"segments":[{"v0":4,"v1":5,"trait":"goalNet","curve":-190,"color":"ff0000"},{"v0":6,"v1":7,"trait":"goalNet","curve":190,"x":370,"color":"ff0000"},{"v0":8,"v1":9,"trait":"goalNet","curve":-190,"color":"ffffff"},{"v0":10,"v1":11,"trait":"goalNet","curve":-190,"color":"ff0000"},{"curve":0,"vis":true,"color":"000000","bCoef":0.1,"cMask":["blue"],"trait":"kickOffBarrier","v0":12,"v1":13,"cGroup":["redKO"]},{"v0":14,"v1":15,"trait":"goalNet","curve":190,"x":370,"color":"ff0000"},{"v0":16,"v1":17,"trait":"goalNet","curve":190,"x":370,"color":"ffffff"},{"curve":0,"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"goalNet","v0":18,"v1":19},{"curve":0,"vis":false,"color":"FFCCCC","bCoef":1.5,"cMask":["ball"],"trait":"goalNet","v0":20,"v1":21},{"curve":0,"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"goalNet","v0":22,"v1":23},{"curve":1,"vis":false,"color":"FFCCCC","bCoef":1,"trait":"goalPost","v0":24,"v1":25,"cMask":["ball"]},{"curve":0,"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"goalPost","v0":28,"v1":29},{"curve":0,"vis":false,"color":"FFCCCC","bCoef":1,"cMask":["ball"],"trait":"goalPost","v0":32,"v1":33},{"curve":0,"vis":true,"color":"000000","bCoef":0.1,"cMask":["red"],"trait":"goalPost","v0":34,"v1":35,"cGroup":["blueKO"]},{"vis":true,"bCoef":1,"trait":"goalNet","v0":30,"v1":36,"color":"ffffff","x":370},{"vis":true,"cMask":["ball"],"v0":26,"v1":37,"color":"ffffff","bCoef":1,"trait":"goalNet","x":-370},{"curve":0,"vis":true,"color":"000000","bCoef":1,"cMask":["ball"],"trait":"goalNet","v0":38,"v1":8,"x":-370},{"curve":0,"vis":true,"color":"ffffff","cMask":["ball"],"trait":"goalNet","v0":39,"v1":19,"bCoef":1,"x":370},{"curve":0,"vis":true,"color":"ffffff","bCoef":1,"trait":"goalNet","v0":28,"v1":29,"cMask":["ball"],"x":-370},{"curve":0,"vis":true,"color":"ffffff","bCoef":1,"trait":"goalNet","v0":40,"v1":41,"x":370},{"curve":0,"vis":true,"color":"ffffff","bCoef":1,"trait":"goalNet","v0":42,"v1":23,"x":-370},{"curve":0,"vis":true,"color":"ffffff","bCoef":1,"trait":"goalNet","v0":43,"v1":44,"x":370},{"curve":0,"vis":true,"color":"ffffff","bCoef":1.4,"cMask":["ball"],"trait":"goalNet","v0":23,"v1":19},{"curve":0,"vis":true,"color":"ffffff","bCoef":1.4,"cMask":["ball"],"trait":"goalNet","v0":26,"v1":30},{"vis":true,"color":"f708ff","bCoef":0.1,"v0":3,"v1":45,"x":0,"cMask":["wall"],"curve":1.50571568977},{"curve":0,"vis":true,"color":"08FFD6","bCoef":0.1,"cMask":["red"],"trait":"goalPost","v0":52,"v1":53,"cGroup":["red"]},{"curve":0,"vis":true,"color":"08FFD6","bCoef":0.1,"cMask":["blue"],"trait":"goalPost","v0":54,"v1":55,"cGroup":["blue"]}],"goals":[{"p0":[-369,-146],"p1":[-369,-102],"team":"red","color":"000000","x":-370},{"p0":[370,-110],"p1":[370,-150],"team":"blue","x":370,"color":"000000"},{"p0":[-370,-35],"p1":[-370,35],"team":"red","color":"000000","x":-370},{"p0":[-370,103],"p1":[-370,143],"team":"red","color":"000000","x":-370},{"p0":[370,143],"p1":[370,98],"team":"blue","x":370,"color":"000000"},{"p0":[370,35],"p1":[370,-35],"team":"blue","x":370,"color":"000000"}],"discs":[{"pos":[-370,-105],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[-370,-144],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[370,-105],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[370,-143],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[-370,35],"trait":"goalPost","color":"ff0000","bCoef":0.5},{"pos":[-370,-35],"trait":"goalPost","color":"ff0000","bCoef":0.5},{"pos":[-370,143],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[-370,105],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[370,143],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[370,104],"trait":"goalPost","color":"ffffff","bCoef":0.5},{"pos":[370,41],"trait":"goalPost","color":"ff0000","bCoef":0.5},{"pos":[370,-35],"trait":"goalPost","color":"ff0000","bCoef":0.5}],"planes":[{"normal":[0,-1],"dist":-170,"trait":"ballArea","bCoef":1},{"normal":[0,1],"dist":-170,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"normal":[1,0],"dist":-423.311779142,"bCoef":0.1},{"normal":[-1,0],"dist":-423.310955619,"bCoef":0.1},{"bCoef":0.1,"dist":-200,"normal":[0,-1]},{"bCoef":0.1,"dist":-200,"normal":[0,1]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.12,"kickingDamping":0.96,"kickStrength":13},"ballPhysics":{"color":"FFFF0D","radius":10}}

/* ----- VARIÁVEIS GLOBAIS ----- */

var playerAuth = [];
var authWhiteList = [];
const Role = { PLAYER: 0, ADMIN: 1, MASTER: 2 };
const Uniform = { COUNTRY: 0, CLUBLA: 1, CLUBEU: 2 };
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed;
var lastPlayerKick = { id: 0, team: 0 };
var penultPlayerKick;
var undefeatedScore = 0;
var players;
var numberEachTeam;
var announcementColor = 0xFFFAFA;

var commands = {
	"ajuda": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": "Esse comando mostra todos os outros comandos, e pode também explicar a função de cada comando. \nExemple: \'!help bb\' mostrará a função do comando \'bb\'.",
		"function": helpCommand,
	},
	"rr": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": "O comando reinicia o jogo.",
		"function": restartCommand,
	},
	"bb": {
		"aliases": ["bye", "gn", "cya"],
		"roles": Role.PLAYER,
		"desc": "O comando te desconecta rapidamente.",
		"function": leaveCommand,
	},
	"claim": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": false,
		"function": adminCommand,
	},
	"pass": {
		"aliases": [],
		"roles": Role.ADMIN,
		"desc": "O comando reinicia o jogo.",
		"function": passwordCommand,
	},
	"uniforme": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": "O comando mostra os uniformes disponíveis para colocar no seu time.\nExemplo: \'!uniforme bah\' coloca o uniforme do bahia em seu time.",
		"function": uniformCommand,
	},
	"reserva": {
		"aliases": [],
		"roles": Role.PLAYER,
		"desc": "O comando muda o uniforme do time para reserva.\nExemplo: \'!reserva\' coloca o uniforme reserva do seu time.",
		"function": reserveCommand,
	}
}

var uniforms = {
	/* SELEÇÕES */
	"ale": {
		"name": 'Alemanha',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 90,
		"textcolor": 0x000000,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xEC1E31,
		"color21": 0x232522,
		"color22": 0x232522,
		"color23": 0x232522,
	},
	"arg": {
		"name": 'Argentina',
		"type": Uniform.COUNTRY,
		"emoji": '🔵⚪🔵',
		"angle": 90,
		"textcolor": 0x1F374B,
		"color1": 0x75AADB,
		"color2": 0xFFFFFF,
		"color3": 0x75AADB,
		"angle2": 0,
		"textcolor2": 0x9F8334,
		"color21": 0x103A73,
		"color22": 0x103A73,
		"color23": 0x103A73,
	},
	"bra": {
		"name": 'Brasil',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 360,
		"textcolor": 0x27965A,
		"color1": 0xDBB71B,
		"color2": 0xDBB71B,
		"color3": 0xDBB71B,
		"angle2": 0,
		"textcolor2": 0xDBB71B,
		"color21": 0x1C56B4,
		"color22": 0x1C56B4,
		"color23": 0x1C56B4,
	},
	"esp": {
		"name": 'Espanha',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🟡🔵',
		"angle": 90,
		"textcolor": 0xFFFF00,
		"color1": 0xFF0000,
		"color2": 0xFF0000,
		"color3": 0xFF0000,
		"angle2": 0,
		"textcolor2": 0xE4524A,
		"color21": 0xEFEFEF,
		"color22": 0xEFEFEF,
		"color23": 0xEFEFEF,
	},
	"por": {
		"name": 'Portugal',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🔴🔴',
		"angle": 0,
		"textcolor": 0x289E1F,
		"color1": 0xFF0000,
		"color2": 0xFF0000,
		"color3": 0xFF0000,
		"angle2": 90,
		"textcolor2": 0x0F303D,
		"color21": 0x48776F,
		"color22": 0x73CFB6,
		"color23": 0x73CFB6,
	},
	"ita": {
		"name": 'Italia',
		"type": Uniform.COUNTRY,
		"emoji": '🟢⚪🔴',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x3646A9,
		"color2": 0x3646A9,
		"color3": 0x3646A9,
		"angle2": 90,
		"textcolor2": 0xDFC396,
		"color21": 0x12282E,
		"color22": 0x17433B,
		"color23": 0x17433B,
	},
	"uru": {
		"name": 'Uruguai',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔵⚪',
		"angle": 0,
		"textcolor": 0x212124,
		"color1": 0x66A5D4,
		"color2": 0x66A5D4,
		"color3": 0x66A5D4,
		"angle2": 0,
		"textcolor2": 0x6CA0CF,
		"color21": 0xE5E5E7,
		"color22": 0xE5E5E7,
		"color23": 0xE5E5E7,
	},
	"fra": {
		"name": 'França',
		"type": Uniform.COUNTRY,
		"emoji": '🔵⚪🔴',
		"angle": 90,
		"textcolor": 0xF5F9F6,
		"color1": 0x265ECF,
		"color2": 0x384355,
		"color3": 0x384355,
		"angle2": 0,
		"textcolor2": 0x3243B4,
		"color21": 0xF5F9F6,
		"color22": 0xF5F9F6,
		"color23": 0xF5F9F6,
	},
	"ing": {
		"name": 'Inglaterra',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔴⚪',
		"angle": 0,
		"textcolor": 0x0549A0,
		"color1": 0xDEDFE4,
		"color2": 0xDEDFE4,
		"color3": 0xDEDFE4,
		"angle2": 0,
		"textcolor2": 0xE92715,
		"color21": 0x2858AB,
		"color22": 0x2858AB,
		"color23": 0x2858AB,
	},
	"bel": {
		"name": 'Bélgica',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴🟡',
		"angle": 0,
		"textcolor": 0xCA9144,
		"color1": 0xC4212A,
		"color2": 0xC4212A,
		"color3": 0xC4212A,
		"angle2": 0,
		"textcolor2": 0x37312B,
		"color21": 0xEFC02E,
		"color22": 0xEFC02E,
		"color23": 0xEFC02E,
	},

	/* CLUBES LA */
	"bah": {
		"name": 'Bahia',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪🔴',
		"angle": 0,
		"textcolor": 0xFFDD00,
		"color1": 0xD10125,
		"color2": 0xE3DFE4,
		"color3": 0x1C3E94,
		"angle2": 270,
		"textcolor2": 0xD10125,
		"color21": 0xE3DFE4,
		"color22": 0xE3DFE4,
		"color23": 0x1C3E94,
	},
	"vit": {
		"name": 'Vitória',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚫🔴',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0xFF1D0D,
		"color2": 0x000000,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0x000000,
		"color21": 0xFF1D0D,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"pal": {
		"name": 'Palmeiras',
		"type": Uniform.CLUBLA,
		"emoji": '🟢⚪🟢',
		"angle": 0,
		"textcolor": 0xE3E7EB,
		"color1": 0x224A40,
		"color2": 0x224A40,
		"color3": 0x224A40,
		"angle2": 0,
		"textcolor2": 0x004738,
		"color21": 0xF4F6FA,
		"color22": 0xF4F6FA,
		"color23": 0xF4F6FA,
	},
	"cor": {
		"name": 'Corinthians',
		"type": Uniform.CLUBLA,
		"emoji": '⚪⚫⚪',
		"angle": 0,
		"textcolor": 0x000000,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0x000000,
		"color23": 0x000000,
	},
	"san": {
		"name": 'Santos',
		"type": Uniform.CLUBLA,
		"emoji": '⚪⚫⚪',
		"angle": 0,
		"textcolor": 0xB69754,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xB69754,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0x000000,
	},
	"sao": {
		"name": 'São Paulo',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪⚫',
		"angle": 90,
		"textcolor": 0x000000,
		"color1": 0xFF0A0A,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0xCE393B,
		"color22": 0xCE393B,
		"color23": 0xCE393B,
	},
	"fla": {
		"name": 'Flamengo',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚫🔴',
		"angle": 90,
		"textcolor": 0xFCF1ED,
		"color1": 0xBA1719,
		"color2": 0x1A1613,
		"color3": 0xBA1719,
		"angle2": 90,
		"textcolor2": 0xBA1719,
		"color21": 0x1A1613,
		"color22": 0x1A1613,
		"color23": 0x1A1613,
	},
	"flu": {
		"name": 'Fluminense',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🟢',
		"angle": 0,
		"textcolor": 0xFCFAFF,
		"color1": 0x005C38,
		"color2": 0x9B030C,
		"color3": 0x005C38,
		"angle2": 0,
		"textcolor2": 0x920F2E,
		"color21": 0xE4DADB,
		"color22": 0xE4DADB,
		"color23": 0xE4DADB,
	},
	"vas": {
		"name": 'Vasco',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 135,
		"textcolor": 0xFF0000,
		"color1": 0xFFFFFF,
		"color2": 0x000000,
		"color3": 0xFFFFFF,
		"angle2": 135,
		"textcolor2": 0xFF0000,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0x000000,
	},
	"bot": {
		"name": 'Botafogo',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0xFFFFFF,
		"color2": 0x000000,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0x3C3A3F,
		"color23": 0x000000,
	},
	"gre": {
		"name": 'Gremio',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪⚫',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x75ACFF,
		"color2": 0x000000,
		"color3": 0x75ACFF,
		"angle2": 0,
		"textcolor2": 0x4A87B7,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"int": {
		"name": 'Internacional',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🔴',
		"angle": 0,
		"textcolor": 0xEBE5E0,
		"color1": 0xD3051F,
		"color2": 0xD3051F,
		"color3": 0xD3051F,
		"angle2": 0,
		"textcolor2": 0xE30222,
		"color21": 0xEBE5E0,
		"color22": 0xEBE5E0,
		"color23": 0xEBE5E0,
	},
	"cru": {
		"name": 'Cruzeiro',
		"type": Uniform.CLUBLA,
		"emoji": '🔵⚪🔵',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x023286,
		"color2": 0x023286,
		"color3": 0x023286,
		"angle2": 0,
		"textcolor2": 0x101B51,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"atl": {
		"name": 'Atlético-MG',
		"type": Uniform.CLUBLA,
		"emoji": '⚫⚪⚫',
		"angle": 0,
		"textcolor": 0xC91926,
		"color1": 0x000000,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
		"angle2": 90,
		"textcolor2": 0xC91926,
		"color21": 0x000000,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"spo": {
		"name": 'Sport',
		"type": Uniform.CLUBLA,
		"emoji": '⚫🔴⚫',
		"angle": 90,
		"textcolor": 0xBCAE46,
		"color1": 0xBE2B2D,
		"color2": 0x020906,
		"color3": 0xBE2B2D,
		"angle2": 90,
		"textcolor2": 0xB6A043,
		"color21": 0x111317,
		"color22": 0xE5E0E2,
		"color23": 0xE5E0E2,
	},
	"riv": {
		"name": 'River Plate',
		"type": Uniform.CLUBLA,
		"emoji": '🔴⚪🔴',
		"angle": 45,
		"textcolor": 0x000000,
		"color1": 0xFFFAFA,
		"color2": 0xFF0000,
		"color3": 0xFFFAFA,
		"angle2": 45,
		"textcolor2": 0xFFFFFF,
		"color21": 0xAF1D27,
		"color22": 0xEA382C,
		"color23": 0xAF1D27,
	},
	"boc": {
		"name": 'Boca Juniors',
		"type": Uniform.CLUBLA,
		"emoji": '🔵🟡🔵',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x05009C,
		"color2": 0xE0B60D,
		"color3": 0x05009C,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0xE0B60D,
		"color22": 0x05009C,
		"color23": 0xE0B60D,
	},
	/* CLUBES EU */
	/*
	"che": {
		"name": 'Chelsea',
		"type": Uniform.CLUBEU,
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x0000CD,
		"color2": 0x0000CD,
		"color3": 0x0000CD,
	},
	"rea": {
		"name": 'Real Madrid',
		"type": Uniform.CLUBEU,
		"angle": 0,
		"textcolor": 0xDAA520,
		"color1": 0xFFFAFA,
		"color2": 0xFFFAFA,
		"color3": 0xFFFAFA,
	},
	"juv": {
		"name": 'Juventus',
		"type": Uniform.CLUBEU,
		"angle": 180,
		"textcolor": 0xDAA520,
		"color1": 0x000000,
		"color2": 0xFFFFFF,
		"color3": 0x000000,
	},
	"bay": {
		"name": 'Bayern de Munique',
		"type": Uniform.CLUBEU,
		"angle": 30,
		"textcolor": 0xFFD700,
		"color1": 0xFF0000,
		"color2": 0xF20000,
		"color3": 0xFF0000,
	},
	"bar": {
		"name": 'Barcelona',
		"type": Uniform.CLUBEU,
		"angle": 0,
		"textcolor": 0xFFD700,
		"color1": 0x00008B,
		"color2": 0x8B0000,
		"color3": 0x00008B,
	},
	"psg": {
		"name": 'Paris Sant-Germain',
		"type": Uniform.CLUBEU,
		"angle": 180,
		"textcolor": 0xFFFFFF,
		"color1": 0x000080,
		"color2": 0xB22222,
		"color3": 0x000080,
	},*/
}

/* ----- VARIÁVEIS DE TIMES ----- */
var nameHome = 'Bahia';
var acronymHome = "bah";
var nameGuest = 'Vitória';
var acronymGuest = "vit";
var emojiHome = '🔵⚪🔴';
var emojiGuest = '🔴⚫🔴';
var playersTeamHome;
var playersTeamGuest;
var playersTeamEspec;
var goalsHome = [];
var goalsGuest = [];
var Hposs;
var Gposs;

/* ----- CONFIGURAÇÕES DE ESTÁDIO E TIME INCIAL ----- */
room.setCustomStadium(goaltogoal);
room.setScoreLimit(3);
room.setTimeLimit(3);

room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);

room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);

/* ----- FUNÇÕES PRIMÁRIAS ----- */

room.onGameStart = function () {
	room.sendAnnouncement(centerText("🥅🥅 PARTIDA INICIANDO 🥅🥅"), null, announcementColor, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} X ${nameGuest} ${emojiGuest}`), null, announcementColor, "bold", 0);

	if (undefeatedScore !== 0) {
		room.sendAnnouncement(centerText(`     📢 ${nameHome} está invicto 📢`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`     📢 Sequência de ${undefeatedScore} jogo(s) 📢`), null, announcementColor, "bold", 0);
	}

	Hposs = 0;
	Gposs = 0;
}

room.onPlayerJoin = function (player) {
	room.sendAnnouncement(centerText(`[PV] Bem-Vindo ${player.name}! digite "!ajuda" para ver os comandos do server.`), player.id, announcementColor, "bold", Notification.CHAT);
	updateAdmins();
	var players = room.getPlayerList();
	if (players.length < 7) {
		numberEachTeam = parseInt(players.length / 2);
	} else {
		numberEachTeam = 3;
	}
}

room.onPlayerLeave = function (player) {
	updateAdmins();
	var players = room.getPlayerList();
	if (players.length < 7) {
		numberEachTeam = parseInt(players.length / 2);
	} else {
		numberEachTeam = 3;
	}
}

room.onPlayerChat = function (player, message) {
	let msgArray = message.split(/ +/);
	if (msgArray[0][0] === '!') {
		let command = getCommand(msgArray[0].slice(1).toLowerCase());
		if (command !== false) commands[command].function(player, message);
		return false;
	}
}

room.onPlayerBallKick = function (player) {
	if (player.id !== lastPlayerKick.id || player.team !== lastPlayerKick.team) {
		penultPlayerKick = lastPlayerKick;
		lastPlayerKick = player;
	}
}

room.onTeamGoal = function (team) {
	const goalTime = getTime();
	const scores = room.getScores();
	if (lastPlayerKick.team === team) {
		room.sendAnnouncement(``, null, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`TOCA A MÚÚSICAAA, É GOOOOOL!!!`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`⚽ Autor: ${lastPlayerKick.name} ⚽`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, announcementColor, "bold", 0);

		if (penultPlayerKick.team === team) {
			room.sendAnnouncement(centerText(`👟 Assistência: ${penultPlayerKick.name}👟`), null, announcementColor, "bold", 0);
			room.setPlayerAvatar(penultPlayerKick.id, '👟');
			setTimeout(function () { room.setPlayerAvatar(penultPlayerKick.id,); }, 2400);
		}
		room.setPlayerAvatar(lastPlayerKick.id, '⚽');
		setTimeout(function () { room.setPlayerAvatar(lastPlayerKick.id,); }, 2400);

		if (team === 1) {
			goalsHome.push(`${lastPlayerKick.name}  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayerKick.name}  ${goalTime}`);
		}

	} else {
		room.sendAnnouncement(``, null, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`🤦‍♂️ É GOOOOOL CONTRA!! 🤦‍♂️`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`🤡 Autor: ${lastPlayerKick.name} 🤡`), null, announcementColor, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidade do Chute: ${ballSpeed.toFixed()}km/h`), null, announcementColor, "bold", 0);
		room.setPlayerAvatar(lastPlayerKick.id, '🤡');
		setTimeout(function () { room.setPlayerAvatar(lastPlayerKick.id,); }, 2400);

		if (team === 1) {
			goalsHome.push(`${lastPlayerKick.name} (C)  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayerKick.name} (C)  ${goalTime}`);
		}
	}
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, announcementColor, "bold", 0);
}

room.onPlayerTeamChange = function () {
	updateTeams();
}

room.onTeamVictory = function () {
	const scores = room.getScores();

	Hposs = Hposs / (Hposs + Gposs);
	Gposs = 1 - Hposs;

	room.sendAnnouncement(centerText(`🏆 FIM DE PARTIDA 🏆`), null, announcementColor, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, 0x0000FF, "bold", 0);
	room.sendAnnouncement(centerText(`${emojiHome} ` + (Hposs * 100).toPrecision(2).toString() + `%` + `  Posse de bola  ` + (Gposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, announcementColor, "bold", 0);

	for (var i = 0; i < 3; i++) {
		room.sendAnnouncement(docketFormat(goalsHome[i], goalsGuest[i]), null, announcementColor, "bold", 0);
	}

	if (scores.red > scores.blue) {
		setTimeout(function () {
			for (var i = 0; i < playersTeamGuest.length; i++) {
				room.setPlayerTeam(playersTeamGuest[i].id, 0);
			}
		}, 6000);

		setTimeout(function () {
			for (var i = 0; i < numberEachTeam; i++) {
				room.setPlayerTeam(playersTeamEspec[i].id, 2);
			}
		}, 7000);

		undefeatedScore++;
		setTimeout(function () { room.startGame(); }, 9000);


	} else {
		setTimeout(function () {
			for (var i = 0; i < playersTeamHome.length; i++) {
				room.setPlayerTeam(playersTeamHome[i].id, 0);
			}
		}, 6000);

		setTimeout(function () {
			for (var i = 0; i < playersTeamGuest.length; i++) {
				room.setPlayerTeam(playersTeamGuest[i].id, 1);
			}
		}, 7000);

		setTimeout(function () {
			for (var i = 0; i < numberEachTeam; i++) {
				room.setPlayerTeam(playersTeamEspec[i].id, 2);
			}
		}, 8000);

		undefeatedScore = 0;
		undefeatedScore++;

		setTimeout(function () { changeUniforme(); }, 8000);

		setTimeout(function () { room.startGame(); }, 9000);
	}

	setTimeout(function () { 
		lastPlayerKick = { id: 0, team: 0 };
		penultPlayerKick = undefined;
		goalsHome = [];
		goalsGuest = [];
	}, 8000);
	
}

room.onGameTick = function () {
	getStats();
}

/* ----- FUNÇÕES AUXILIARES ----- */

function getCommand(commandStr) {
	if (commands.hasOwnProperty(commandStr)) return commandStr;
	for (const [key, value] of Object.entries(commands)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === commandStr) return key;
		}
	}
	return false;
}

function updateAdmins() {
	var players = room.getPlayerList();
	if (players.length == 0) return;
	if (players.find((player) => player.admin) != null) return;
	room.setPlayerAdmin(players[0].id, true);
}

function centerText(string) {
	var space;
	space = parseInt((80 - string.length) * 0.8, 10);
	return ' '.repeat(space) + string + ' '.repeat(space)
}

function docketFormat(string1, string2) {
	if (string1 !== undefined && string2 === undefined) {
		var space = 53 - (string1.length) * 0.8;
		return ' '.repeat(space) + string1
	} else if (string2 !== undefined && string1 === undefined) {
		return ' '.repeat(77) + string2
	} else if (string2 !== undefined && string1 !== undefined) {
		var space = 16 - (string1.length + 10 + string2.length)
		return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
	} else if (string1 === undefined && string2 === undefined) {
		return ''
	}
}

function updateTeams() {
	var players = room.getPlayerList();
	playersTeamHome = players.filter(player => player.team === 1);
	playersTeamGuest = players.filter(player => player.team === 2);
	playersTeamEspec = players.filter(player => player.team === 0);
}

function getTime() {
	const scores = room.getScores();
	var min = parseInt(scores.time / 60);
	var sec = parseInt(scores.time) - min * 60;
	return `[${min}' ${sec}"]`
}

function getStats() {
	const ballPosition = room.getBallPosition();
	point[1] = point[0];
	point[0] = ballPosition;
	ballSpeed = pointDistance(point[0], point[1]) * speedCoefficient;
	lastPlayerKick.team == 1 ? Hposs++ : Gposs++;
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function instantRestart() {
	room.stopGame();
	setTimeout(() => { 
		room.startGame();
		lastPlayerKick = { id: 0, team: 0 };
		penultPlayerKick = undefined;
		goalsHome = [];
		goalsGuest = []; 
	}, 10);

}

function getCommand(commandStr) {
	if (commands.hasOwnProperty(commandStr)) return commandStr;
	for (const [key, value] of Object.entries(commands)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === commandStr) return key;
		}
	}
	return false;
}

function getUniform(uniformStr) {
	if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
	for (const [key, value] of Object.entries(uniforms)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === uniformStr) return key;
		}
	}
	return false;
}

function changeUniforme() {
	var a = nameHome;
	nameHome = nameGuest;
	nameGuest = a;

	var b = acronymHome;
	acronymHome = acronymGuest;
	acronymGuest = b;

	var c = emojiHome;
	emojiHome = emojiGuest;
	emojiGuest = c;

	room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);
	
	room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);
}

/* ----- FUNÇÕES DOS COMANDOS ----- */

function restartCommand(player, message) {
	if (player.admin) instantRestart();
}

function passwordCommand(player, message) {
	if (player.admin) {
		msgArray = message.split(/ +/).slice(1);
		if (msgArray.length === 0) {
			room.setPassword(null);
		}
		if (msgArray.length >= 1) {
			room.setPassword(`${msgArray[0]}`);
		}
	}
}

function leaveCommand(player, message) {
	room.kickPlayer(player.id, "Tchau !", false);
}

function adminCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (parseInt(msgArray[0]) === adminPassword) {
		room.setPlayerAdmin(player.id, true);
		authWhiteList.push(playerAuth[player.id]);
		room.sendAnnouncement(`${player.name} agora é o mestre da sala !`, null, announcementColor, "bold", Notification.CHAT);
	}
}

function helpCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var commandString = "[PV] LISTA DE COMANDOS DO SERVER"
		commandString += "\nComandos de Players:";
		for (const [key, value] of Object.entries(commands)) {
			if (value.desc && value.roles === Role.PLAYER) commandString += ` !${key},`;
		}
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (player.admin) {
			commandString += `\nComandos de Administradores :`;
			for (const [key, value] of Object.entries(commands)) {
				if (value.desc && value.roles === Role.ADMIN) commandString += ` !${key},`;
			}
		}

		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		if (commandString.slice(commandString.length - 1) === ":") commandString += ` None,`;
		commandString = commandString.substring(0, commandString.length - 1) + ".";
		commandString += "\n\nPara obter informações sobre um comando em específico, digite '\'!ajuda <nome do comando>\'.";
		room.sendAnnouncement(commandString, player.id, announcementColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var commandName = getCommand(msgArray[0].toLowerCase());
		if (commandName !== false && commands[commandName].desc !== false) room.sendAnnouncement(`[PV] Comando \'${commandName}\' :\n${commands[commandName].desc}`, player.id, statsColor, "bold", Notification.CHAT);
		else room.sendAnnouncement(`[PV] Esse comando não existe. Para olhar a lista de comandos digite \'!ajuda\'`, player.id, announcementColor, "bold", Notification.CHAT);
	}
}

function uniformCommand(player, message) {
	msgArray = message.split(/ +/).slice(1);
	if (msgArray.length === 0) {
		var uniformString = "[PV] Seleções :";
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.COUNTRY) uniformString += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString += `\n`
		room.sendAnnouncement(uniformString, player.id, announcementColor, "bold", Notification.CHAT);
		uniformString2 = `[PV] Clubes Sul-americanos :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBLA) uniformString2 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString2 += `\n`
		room.sendAnnouncement(uniformString2, player.id, announcementColor, "bold", Notification.CHAT);
		uniformString3 = `[PV] Clubes Europeus :`;
		for (const [key, value] of Object.entries(uniforms)) {
			if (value.type === Uniform.CLUBEU) uniformString3 += `\n${value.name}: !uniforme ${key}`;
		}
		uniformString3 += `\n`
		room.sendAnnouncement(uniformString3, player.id, announcementColor, "bold", Notification.CHAT);
		room.sendAnnouncement("Para escolher um uniforme para seu time digite '\'!uniforme <nome do time>\'.", player.id, announcementColor, "bold", Notification.CHAT);
	}
	else if (msgArray.length >= 1) {
		var uniformName = getUniform(msgArray[0].toLowerCase());
		if (uniformName !== false && uniforms[uniformName].name !== false) {
			room.sendAnnouncement(`[PV] O uniforme do \'${uniforms[uniformName].name}\' foi colocado em seu time.`, player.id, announcementColor, "bold", Notification.CHAT);

			room.setTeamColors(player.team, uniforms[uniformName].angle, uniforms[uniformName].textcolor, [uniforms[uniformName].color1, uniforms[uniformName].color2, uniforms[uniformName].color3]);

			if (player.team == 1) {
				nameHome = uniforms[uniformName].name;
				acronymHome = uniformName;
				emojiHome = uniforms[uniformName].emoji;
			} else if (player.team == 2) {
				nameGuest = uniforms[uniformName].name;
				acronymGuest = uniformName;
				emojiGuest = uniforms[uniformName].emoji;
			}
		} else {
			room.sendAnnouncement(`[PV] Esse uniforme não existe, digite \'!uniforme\' para ver todos os disponíveis`, player.id, announcementColor, "bold", Notification.CHAT);
		}
	}
}

function reserveCommand(player) {

	if (player.team === 1 && nameHome !== 'Mandante') {
		room.setTeamColors(player.team, uniforms[acronymHome].angle2, uniforms[acronymHome].textcolor2, [uniforms[acronymHome].color21, uniforms[acronymHome].color22, uniforms[acronymHome].color23]);
	} else if (player.team === 1 && nameHome === 'Mandante') {
		room.sendAnnouncement(`[PV] Seu time ainda não tem um uniforme, digite !uniforme e veja as possibilidades.`, player.id, announcementColor, "bold", Notification.CHAT);
	}

	if (player.team === 2 && nameGuest !== 'Visitante') {
		room.setTeamColors(player.team, uniforms[acronymGuest].angle2, uniforms[acronymGuest].textcolor2, [uniforms[acronymGuest].color21, uniforms[acronymGuest].color22, uniforms[acronymGuest].color23]);
	} else if (player.team === 2 && nameGuest === 'Visitante') {
		room.sendAnnouncement(`[PV] Seu time ainda não tem um uniforme, digite !uniforme e veja as possibilidades.`, player.id, announcementColor, "bold", Notification.CHAT);
	}
}
