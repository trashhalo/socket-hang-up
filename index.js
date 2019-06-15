const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac diam porta, venenatis diam sed, pharetra lacus. Suspendisse iaculis gravida libero ut imperdiet. Pellentesque nibh massa, hendrerit sit amet sapien sit amet, ornare lobortis leo. Maecenas dapibus nisl vitae leo ullamcorper dapibus. Phasellus ut sem libero. Pellentesque vulputate libero id est cursus, vitae tristique justo tincidunt. Duis consectetur mauris id turpis blandit, eu gravida leo gravida. Donec tristique eros risus, quis dictum metus venenatis sed. Duis non egestas enim. Nunc eleifend bibendum auctor.

Nam aliquam sapien eget metus venenatis, nec aliquam sem scelerisque. Maecenas et bibendum felis, quis porttitor sem. Fusce eget augue convallis, congue libero nec, fermentum dui. Curabitur massa nulla, dapibus eget malesuada nec, finibus nec neque. Quisque porttitor egestas odio, sed lobortis mi euismod eu. Phasellus pulvinar lobortis lacus. Vivamus tincidunt orci ut arcu tempus, ut pharetra odio efficitur.

Duis condimentum lorem in justo bibendum, eget suscipit augue congue. Duis non nunc metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur ex ac erat consequat posuere. In sed metus facilisis, venenatis justo at, eleifend ipsum. Nunc malesuada urna enim, eu fermentum ligula aliquam in. Ut eleifend lectus quis odio tempor gravida at accumsan orci. Nunc porttitor posuere neque. Sed sed efficitur arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vitae elit sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tristique facilisis dolor in semper. Suspendisse ut diam consequat, condimentum purus non, accumsan enim. Aliquam eget ex neque. Quisque in faucibus tortor, id lacinia lectus.

Quisque fermentum hendrerit sapien ac blandit. Maecenas sit amet elit sed orci pretium eleifend. Integer eros magna, pharetra non erat in, viverra mattis nibh. Nam quis tincidunt eros, id posuere purus. Quisque quis porta neque. Aliquam lectus libero, hendrerit sed elit ac, interdum tincidunt velit. Quisque accumsan metus eu pellentesque interdum. Donec congue erat odio, eget maximus ex laoreet in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras fermentum ante in suscipit ullamcorper. Suspendisse tortor neque, iaculis et pharetra vitae, dignissim at lorem. Donec in nunc luctus, condimentum arcu eget, tempor eros. Mauris finibus tempus velit, in fringilla velit eleifend sit amet. Vivamus vestibulum pharetra elit, a volutpat libero auctor et. Aenean luctus nibh leo.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam rutrum dapibus auctor. Nullam elementum in mi vel semper. Aliquam dolor enim, blandit id enim eget, dapibus mattis tellus. Etiam bibendum enim in tellus porttitor, ut auctor risus gravida. Proin porta nec ante id porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean dignissim diam non massa malesuada volutpat. Vestibulum felis enim, iaculis vel mauris vel, congue fringilla purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  
    `)
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));