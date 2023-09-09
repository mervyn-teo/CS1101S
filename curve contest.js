import {draw_connected_full_view, make_color_point, animate_curve} from "curve";


function curves_contest(){
    function donut(b){
//    const b = 30;
//    const new_t = t/100;
    const x = t => math_cos(t) + math_cos(b * t)/2 + math_sin(t)/3;
    const y = t => math_sin(t) + math_sin(b * t)/2 + math_cos(t)/3;
    function r(t){
        return t < 1/6 
            ? 255 
            : t < 2/6 
            ? 255 * (3 - (t * 6)) 
            : t < 4/6 
            ? 0 
            : t < 5/6 
            ? 255 * (5 -(t * 6))
            : 255;
        
    }
    function g(t){
        return t < 1/5 
            ? 255 * t / 5 
            : t < 2/5 
            ? 255 
            : t < 3/5 
            ? 255 * (4 - (t * 5)) 
            : t < 4/5 
            ? 255 * (( t / 0.2) - 3)
            : 255;
        
    }
    function bl(t){
        return t < 1/5 
            ? 255 
            : t < 2/5 
            ? 255 * (1 - (t / 0.2)) 
            : t < 3/5 
            ? 0 
            : t < 4/5 
            ? 255 * (( t / 0.2) - 3)
            : 255;
        
    }

    return draw_connected_full_view(10000)(t => make_color_point(x(2 * math_PI * t), 
                                                                 y(2 * math_PI * t),
                                                                 r(t),
                                                                 0,
                                                                 0
                                                                 ));
    }
    
    return donut(300); //animate_curve(10, 3, draw_connected_full_view, donut);
}

// Keep this function call
curves_contest();