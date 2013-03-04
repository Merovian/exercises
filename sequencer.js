var Sequencer = function(){
  this.go = function(initial_value, iterations){
    var current_value = initial_value;
    var array_result;
    for (var i=0; i<iterations; i++){
      array_result = this.string_to_formatted_array(current_value);
      current_value = "";
      array_result.map( function(item) { current_value += item.length.toString() + item[0]; } );
      console.log(current_value);
    };
  };

};

Sequencer.prototype.string_to_formatted_array = function(the_input){
  var result = new Array();
  var input_string = the_input.toString();
  for (var i=0; i<input_string.length; i++){
    if ((i>0) && (input_string[i] == input_string[i-1])){
      result[result.length-1].push(input_string[i]);
    }else {
      result.push(new Array(input_string[i]));
    };
  };
  return result; 
};

var new_sequencer = new Sequencer();
new_sequencer.go(1,10);
