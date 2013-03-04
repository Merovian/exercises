class Sequence
  def go(initial_value, iterations)
    current_value = initial_value.to_s
    iterations.times do 
      array_result = string_to_formatted_array(current_value)
      current_value = array_result.map{|r| "#{r.length}#{r.first}"}.to_s
      print current_value
      print "\n"
    end
  end

  private

  def string_to_formatted_array(input)
    final_array=Array.new
    char_split = input.to_s.split''

    char_split.each_with_index do |char, index|
      if index > 0 && char_split[index] == char_split[index-1]
        final_array.last << char
      else
        final_array << [char]
      end
      
    end
    final_array
  end

end

new_sequencer = Sequence.new
new_sequencer.go(1,10)
