import {unit_circle, draw_connected_full_view, make_color_point, animate_curve, rotate_around_origin} from "curve";


function curves_contest(){
    function donut(b){
    const x = t => math_cos(t) + math_cos(10*b*t)/2 + math_sin(t)/3;
    const y = t => math_sin(t) + math_sin(10*b*t)/2 + math_cos(t)/3;
    function r(t){
        return t < 1/6 
            ? 255 
            : t < 2/6 
            ? 255 * (2 - (t * 6)) 
            : t < 4/6  
            ? 0 
            : t < 5/6 
            ? 255 * ((t * 6) - 4)
            : 255;
        
    }
    function g(t){
        return t < 1/6 
            ? 255 * t * 6 
            : t < 3/6 
            ? 255 
            : t < 4/6 
            ? 255 * (4 - (t * 6)) 
            : 0;
        
    }
    function bl(t){
        return t < 2/6 
            ? 0 
            : t < 3/6 
            ? 255 * ((t * 6) - 2) 
            : t < 5/6 
            ? 255 
            : 255 * (6 - t * 6);
        
    }

    return (t => make_color_point(x(2 * math_PI * t), 
                                  y(2 * math_PI * t),
                                  r(t),
                                  g(t),
                                  bl(t)
                )
    );
    } 
    
    return animate_curve(10, 60, draw_connected_full_view(6000), donut);
}

// Keep this function call
curves_contest();


//animate_curve(10, 60, draw_connected_full_view(3), t => (rotate_around_origin(0, 0, 2*t)(unit_circle)));
                                                                                                  















