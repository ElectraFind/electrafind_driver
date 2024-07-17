import { ActivityIndicator, Text, TouchableOpacity,Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import PlaceItem from "../app/screens/map/PlaceItem";


const GotoPageButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  
  

  
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-green-500 rounded-l min-h-[50px] min-w-[50px] flex flex-row justify-center margin-10 items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >

      
      <FontAwesome name="location-arrow" size={24} color="#ffffff" />

      

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default GotoPageButton;