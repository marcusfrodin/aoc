let solve1 = (s) => (s+s[0]).split('').reduce((o,c,i,a) => 
		{ if (c == a[i+1]) o.push(c); return o },[])
		.map((c) => parseInt(c)).reduce((a,n) => a+n, 0);

let solve2 = (s) => s.split('').reduce((o,c,i,a) => 
		{ if (c == s[(i+s.length/2)%s.length]) o.push(c); return o },[])
		.map((c) => parseInt(c)).reduce((a,n) => a+n, 0);

const NUM = "8182759779311661784248926537799313421565672689468495979" +
			"4894446986381824811432752482413692448689179473928166874" +
			"1616818614613222585132742386168687517939432911753846817" +
			"9974735556938213169184734744597887149176657943367536288" +
			"3623115957873481348568724727328892621697699251631441583" +
			"6985611354682821892793983922755395577592859959966574329" +
			"7876939342422331599478467572795239392178441943465994948" +
			"5845958279832679951257136529467397895592841695512721162" +
			"4234143497546729348687844317864243859238665326784414349" +
			"6189858322592247618573713891336357118194769698545841235" +
			"8956616349179644216781589953978823711833921869913749753" +
			"2932492226948892362554937381497389469981346971998271644" +
			"3629448398839539676986654273145924389581816976395946311" +
			"4299115632725741318662192336963246691883695127751942169" +
			"5264986942261781256412377711245825379412978876134267384" +
			"7936947567322467997394647212154464779727378834456156647" +
			"5592344144178112893336958565592561525754849962887824212" +
			"2434979197969569971961379367756499884537433839217835728" +
			"2637984318746543171379551755652535557359683761157496415" +
			"2795793569148796516121185347674775898285481136742265632" +
			"1836839326818976668191525884763294465366151349347633968" +
			"3214579541526211758377547236754853483392612881958653485" +
			"4579357584387473178585271828131148121751583482218547798" +
			"2342271937155479432673815629144664144538221768992733498" +
			"8569342555188753816723425218194999398359198271663187158" +
			"4916171577542798148523346722258676439278369927345222872" +
			"8667175488552924399518855743923659815483988899924199449" +
			"7213215894768641617788413528535735844894972632166273698" +
			"4145516547695448371511212746531135341134613267156156844" +
			"4626828453687183385215975319858714144975174516356117245" +
			"9936965219415891683945742877852336852842943575481564875" +
			"3817546217626816285274699663397794875529686961677857732" +
			"7951858348313582783675149343562362974553976147259225311" +
			"1837294153815274359262247811819871114544473718946453597" +
			"9722949345844352254938676984574255764434955464153848825" +
			"2581267341635761715674381775778868374988451463624332123" +
			"3615765184112344386811718649239168969878367341292953546" +
			"8496289761635872263372419827855233979462993957484167235" +
			"5699222747886785616814449297817352118452284785694551841" +
			"431869545321438468118";

console.log("1.1:", solve1(NUM));
console.log("1.2:", solve2(NUM));