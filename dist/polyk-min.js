!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.PolyK=n()}}(function(){return function n(t,e,r){function i(f,u){if(!e[f]){if(!t[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(o)return o(f,!0);var l=new Error("Cannot find module '"+f+"'");throw l.code="MODULE_NOT_FOUND",l}var x=e[f]={exports:{}};t[f][0].call(x.exports,function(n){var e=t[f][1][n];return i(e?e:n)},x,x.exports,n,t,e,r)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<r.length;f++)i(r[f]);return i}({1:[function(n,t){t.exports=e;var e={};e.IsSimple=function(n){var t=n.length>>1;if(4>t)return!0;for(var r=new e._P,i=new e._P,o=new e._P,f=new e._P,u=new e._P,a=0;t>a;a++){r.x=n[2*a],r.y=n[2*a+1],a==t-1?(i.x=n[0],i.y=n[1]):(i.x=n[2*a+2],i.y=n[2*a+3]);for(var l=0;t>l;l++)if(!(Math.abs(a-l)<2||l==t-1&&0==a||a==t-1&&0==l||(o.x=n[2*l],o.y=n[2*l+1],l==t-1?(f.x=n[0],f.y=n[1]):(f.x=n[2*l+2],f.y=n[2*l+3]),null==e._GetLineIntersection(r,i,o,f,u))))return!1}return!0},e.IsConvex=function(n){if(n.length<6)return!0;for(var t=n.length-4,r=0;t>r;r+=2)if(!e._convex(n[r],n[r+1],n[r+2],n[r+3],n[r+4],n[r+5]))return!1;return e._convex(n[t],n[t+1],n[t+2],n[t+3],n[0],n[1])&&e._convex(n[t+2],n[t+3],n[0],n[1],n[2],n[3])?!0:!1},e.GetArea=function(n){if(n.length<6)return 0;for(var t=n.length-2,e=0,r=0;t>r;r+=2)e+=(n[r+2]-n[r])*(n[r+1]+n[r+3]);return e+=(n[0]-n[t])*(n[t+1]+n[1]),.5*-e},e.GetAABB=function(n){for(var t=1/0,e=1/0,r=-t,i=-e,o=0;o<n.length;o+=2)t=Math.min(t,n[o]),r=Math.max(r,n[o]),e=Math.min(e,n[o+1]),i=Math.max(i,n[o+1]);return{x:t,y:e,width:r-t,height:i-e}},e.Reverse=function(n){for(var t=[],e=n.length-2;e>=0;e-=2)t.push(n[e],n[e+1]);return t},e.Triangulate=function(n){var t=n.length>>1;if(3>t)return[];for(var r=[],i=[],o=0;t>o;o++)i.push(o);for(var o=0,f=t;f>3;){var u=i[(o+0)%f],a=i[(o+1)%f],l=i[(o+2)%f],x=n[2*u],y=n[2*u+1],s=n[2*a],v=n[2*a+1],h=n[2*l],c=n[2*l+1],_=!1;if(e._convex(x,y,s,v,h,c)){_=!0;for(var p=0;f>p;p++){var d=i[p];if(d!=u&&d!=a&&d!=l&&e._PointInTriangle(n[2*d],n[2*d+1],x,y,s,v,h,c)){_=!1;break}}}if(_)r.push(u,a,l),i.splice((o+1)%f,1),f--,o=0;else if(o++>3*f)break}return r.push(i[0],i[1],i[2]),r},e.ContainsPoint=function(n,t,e){for(var r,i=n.length>>1,o=n[2*i-3]-e,f=n[2*i-2]-t,u=n[2*i-1]-e,a=0;i>a;a++)r=f,o=u,f=n[2*a]-t,u=n[2*a+1]-e,o!=u&&(lup=u>o);for(var l=0,a=0;i>a;a++)if(r=f,o=u,f=n[2*a]-t,u=n[2*a+1]-e,!(0>o&&0>u||o>0&&u>0||0>r&&0>f)){if(o==u&&Math.min(r,f)<=0)return!0;if(o!=u){var x=r+(f-r)*-o/(u-o);if(0==x)return!0;x>0&&l++,0==o&&lup&&u>o&&l--,0==o&&!lup&&o>u&&l--,lup=u>o}}return 1==(1&l)},e.Slice=function(n,t,r,i,o){if(e.ContainsPoint(n,t,r)||e.ContainsPoint(n,i,o))return[n.slice(0)];for(var f=new e._P(t,r),u=new e._P(i,o),a=[],l=[],x=0;x<n.length;x+=2)l.push(new e._P(n[x],n[x+1]));for(var x=0;x<l.length;x++){var y=new e._P(0,0);y=e._GetLineIntersection(f,u,l[x],l[(x+1)%l.length],y);var s=a[0],v=a[a.length-1];y&&(null==s||e._P.dist(y,s)>1e-10)&&(null==v||e._P.dist(y,v)>1e-10)&&(y.flag=!0,a.push(y),l.splice(x+1,0,y),x++)}if(a.length<2)return[n.slice(0)];var h=function(n,t){return e._P.dist(f,n)-e._P.dist(f,t)};a.sort(h);for(var c=[],_=0;a.length>0;){var p=(l.length,a[0]),d=a[1],g=l.indexOf(p),P=l.indexOf(d),m=!1;if(e._firstWithFlag(l,g)==P?m=!0:(p=a[1],d=a[0],g=l.indexOf(p),P=l.indexOf(d),e._firstWithFlag(l,g)==P&&(m=!0)),m){_--;var w=e._getPoints(l,g,P);c.push(w),l=e._getPoints(l,P,g),p.flag=d.flag=!1,a.splice(0,2),0==a.length&&c.push(l)}else _++,a.reverse();if(_>1)break}for(var I=[],x=0;x<c.length;x++){for(var M=c[x],L=[],C=0;C<M.length;C++)L.push(M[C].x,M[C].y);I.push(L)}return I},e.Raycast=function(n,t,r,i,o,f){var u=n.length-2,a=e._tp,l=a[0],x=a[1],y=a[2],s=a[3],v=a[4];l.x=t,l.y=r,x.x=t+i,x.y=r+o,null==f&&(f={dist:0,edge:0,norm:{x:0,y:0},refl:{x:0,y:0}}),f.dist=1/0;for(var h=0;u>h;h+=2){y.x=n[h],y.y=n[h+1],s.x=n[h+2],s.y=n[h+3];var c=e._RayLineIntersection(l,x,y,s,v);c&&e._updateISC(i,o,l,y,s,v,h/2,f)}y.x=s.x,y.y=s.y,s.x=n[0],s.y=n[1];var c=e._RayLineIntersection(l,x,y,s,v);return c&&e._updateISC(i,o,l,y,s,v,n.length/2-1,f),f.dist!=1/0?f:null},e.ClosestEdge=function(n,t,r,i){{var o=n.length-2,f=e._tp,u=f[0],a=f[2],l=f[3];f[4]}u.x=t,u.y=r,null==i&&(i={dist:0,edge:0,point:{x:0,y:0},norm:{x:0,y:0}}),i.dist=1/0;for(var x=0;o>x;x+=2)a.x=n[x],a.y=n[x+1],l.x=n[x+2],l.y=n[x+3],e._pointLineDist(u,a,l,x>>1,i);a.x=l.x,a.y=l.y,l.x=n[0],l.y=n[1],e._pointLineDist(u,a,l,o>>1,i);var y=1/i.dist;return i.norm.x=(t-i.point.x)*y,i.norm.y=(r-i.point.y)*y,i},e._pointLineDist=function(n,t,e,r,i){var o,f,u=n.x,a=n.y,l=t.x,x=t.y,y=e.x,s=e.y,v=u-l,h=a-x,c=y-l,_=s-x,p=v*c+h*_,d=c*c+_*_,g=p/d;0>g||l==y&&x==s?(o=l,f=x):g>1?(o=y,f=s):(o=l+g*c,f=x+g*_);var P=u-o,m=a-f,w=Math.sqrt(P*P+m*m);w<i.dist&&(i.dist=w,i.edge=r,i.point.x=o,i.point.y=f)},e._updateISC=function(n,t,r,i,o,f,u,a){var l=e._P.dist(r,f);if(l<a.dist){var x=1/e._P.dist(i,o),y=-(o.y-i.y)*x,s=(o.x-i.x)*x,v=2*(n*y+t*s);a.dist=l,a.norm.x=y,a.norm.y=s,a.refl.x=-v*y+n,a.refl.y=-v*s+t,a.edge=u}},e._getPoints=function(n,t,e){var r=n.length,i=[];t>e&&(e+=r);for(var o=t;e>=o;o++)i.push(n[o%r]);return i},e._firstWithFlag=function(n,t){for(var e=n.length;;)if(t=(t+1)%e,n[t].flag)return t},e._PointInTriangle=function(n,t,e,r,i,o,f,u){var a=f-e,l=u-r,x=i-e,y=o-r,s=n-e,v=t-r,h=a*a+l*l,c=a*x+l*y,_=a*s+l*v,p=x*x+y*y,d=x*s+y*v,g=1/(h*p-c*c),P=(p*_-c*d)*g,m=(h*d-c*_)*g;return P>=0&&m>=0&&1>P+m},e._RayLineIntersection=function(n,t,r,i,o){var f=n.x-t.x,u=r.x-i.x,a=n.y-t.y,l=r.y-i.y,x=f*l-a*u;if(0==x)return null;var y=n.x*t.y-n.y*t.x,s=r.x*i.y-r.y*i.x,v=o,h=1/x;return v.x=(y*u-f*s)*h,v.y=(y*l-a*s)*h,e._InRect(v,r,i)?a>0&&v.y>n.y||0>a&&v.y<n.y?null:f>0&&v.x>n.x||0>f&&v.x<n.x?null:v:null},e._GetLineIntersection=function(n,t,r,i,o){var f=n.x-t.x,u=r.x-i.x,a=n.y-t.y,l=r.y-i.y,x=f*l-a*u;if(0==x)return null;var y=n.x*t.y-n.y*t.x,s=r.x*i.y-r.y*i.x,v=o;return v.x=(y*u-f*s)/x,v.y=(y*l-a*s)/x,e._InRect(v,n,t)&&e._InRect(v,r,i)?v:null},e._InRect=function(n,t,e){var r=Math.min(t.x,e.x),i=Math.max(t.x,e.x),o=Math.min(t.y,e.y),f=Math.max(t.y,e.y);return r==i?o<=n.y&&n.y<=f:o==f?r<=n.x&&n.x<=i:r<=n.x+1e-10&&n.x-1e-10<=i&&o<=n.y+1e-10&&n.y-1e-10<=f},e._convex=function(n,t,e,r,i,o){return(t-r)*(i-e)+(e-n)*(o-r)>=0},e._P=function(n,t){this.x=n,this.y=t,this.flag=!1},e._P.prototype.toString=function(){return"Point ["+this.x+", "+this.y+"]"},e._P.dist=function(n,t){var e=t.x-n.x,r=t.y-n.y;return Math.sqrt(e*e+r*r)},e._tp=[];for(var r=0;10>r;r++)e._tp.push(new e._P(0,0))},{}]},{},[1])(1)});