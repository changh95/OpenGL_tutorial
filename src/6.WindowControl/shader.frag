#version 330                                                                  
                                                                              
in vec4 vCol;	// fragment shader loading vCol from vertex Shader			  
                                                                              
out vec4 colour;                                                              
                                                                              
void main()                                                                   
{                                                                             
    colour = vCol;															  
};