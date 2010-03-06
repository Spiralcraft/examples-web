//SHA-256 : MIT License: Credit- antimatter15.com : UTF8-encode input
function SHA256(b){
	function h(j,k){
		return(j>>e)+(k>>e)+((p=(j&o)+(k&o))>>e)<<e|p&o
		}
	function f(j,k){
		return j>>>k|j<<32-k
		}
	var g=[],d,c=3,l=[2],p,i,q,a,m=[],n=[];i=b.length*8;
	for(var e=16,o=65535,r="";c<312;c++){
		for(d=l.length;d--&&c%l[d]!=0;);
		d<0&&l.push(c)
		}
	b+="\u0080";
	for(c=0;c<=i;c+=8)n[c>>5]|=(b.charCodeAt(c/8)&255)<<24-c%32;
	n[(i+64>>9<<4)+15]=i;
	for(c=8;c--;)m[c]=parseInt(Math.pow(l[c],0.5).toString(e).substr(2,8),e);
	for(c=0;c<n.length;c+=e){
		a=m.slice(0);
	    for(b=0;b<64;b++){
		    g[b]=b<e?n[b+c]:h(h(h(f(g[b-2],17)^f(g[b-2],19)^g[b-2]>>>10,g[b-7]),f(g[b-15],7)^f(g[b-15],18)^g[b-15]>>>3),g[b-e]);
		    i=h(h(h(h(a[7],f(a[4],6)^f(a[4],11)^f(a[4],25)),a[4]&a[5]^~a[4]&a[6]),parseInt(Math.pow(l[b],1/3).toString(e).substr(2,8),e)),g[b]);
		    q=(f(a[0],2)^f(a[0],13)^f(a[0],22))+(a[0]&a[1]^a[0]&a[2]^a[1]&a[2]);
		    for(d=8;--d;)a[d]=d==4?h(a[3],i):a[d-1];a[0]=h(i,q)
		    }
	    for(d=8;d--;)m[d]+=a[d]
    }
	for(c=0;c<8;c++)
		for(b=8;b--;)r+=(m[c]>>>b*4&15).toString(e);
	return r
	}


function encode_utf8( s ) {
  return unescape( encodeURIComponent( s ) );
}

function decode_utf8( s ) {
  return decodeURIComponent( escape( s ) );
}