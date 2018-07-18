Bias Rounding
=========

Round a number to the floor or ceiling, based on your own set bias

## Usage

`var bias = require('bias');`
                                                                
bias - round up or down depending on number in tenths column           

`bias.bias({given-value},{bias-number(default 5)})`                     
                                                                        
```                                                                     
bias.bias(5.4);                                                         
                                                                        
// returns 5
                               
```                                                                     
                                                                       
Add a bias number                                                       
                                                                     
```                                                                     
bias.bias(5.4, 4);                                                      
                                                                     
//return 6                                                              
```                                                                     
                                                                      
bias.biasIn - round based on tenths column given    

`bias.biasIn({given-value}, {tenth-position(default 0)},         
{bias-number(default 5) })`                                             
                                                                       
```                                                                     
bias.biasIn(.5555, -3, 4);                                      
                                                                    
// returns .556                                                         
                                                                         
```              

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.