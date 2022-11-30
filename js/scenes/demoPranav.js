export const init = async model => {

    let components = model.add();
    let ball1 = components.add('sphere').texture('media/textures/brick.png');
    let ball2 = components.add('sphere').texture('media/textures/brick.png');

    model.animate(() => {
        components.identity().scale(1);
        ball1.identity().move(0,1.5,0).move(.2 * Math.sin(model.time),.2 * Math.cos(model.time),0).turnY(model.time).scale(.1,.1,.1);
        ball2.identity().move(0,1.5,0).move(.2 * Math.sin(model.time),.2 * Math.cos(model.time),0)
        .move(.4 * Math.sin(2*model.time),.4 * Math.cos(2*model.time),0).turnY(2*model.time).scale(.1,.1,.1);
    });
}