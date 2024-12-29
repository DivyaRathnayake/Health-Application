import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

// Import local image
import YogaImage from '../assets/yoga.jpg'; 
import danceImage from '../assets/dance.jpg'; 
import straightImage from'../assets/straight.jpg';
import  pilatesImage from '../assets/pilates.jpg';
import  cardioImage from '../assets/cardio.jpg';




const ClickCountContext = createContext();

export default function App() {
  return (
    <ClickCountProvider>
      <Home />
    </ClickCountProvider>
  );
}

const ClickCountProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => setClickCount(clickCount + 1);

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userName = 'Divya Rathnayake';
  const { clickCount, incrementCount } = useContext(ClickCountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workoutData = [
          {
            id: 1,
            title: 'Yoga for Beginners',
            description: 'A calming yoga routine perfect for beginners.',
            difficulty: 'Easy',
            imageUrl: YogaImage, // Use local image
          },
          {
            id: 2,
            title: 'Cardio Blast',
            description: 'An intense cardio session to burn calories.',
            difficulty: 'Medium',
            imageUrl:cardioImage ,
          },
          {
            id: 3,
            title: 'Strength Training',
            description: 'Strengthen your body with this 30-minute routine.',
            difficulty: 'Hard',
            imageUrl:straightImage,
      
          },
          {
            id: 4,
            title: 'Pilates Core',
            description: 'Focus on your core with pilates exercises',
            difficulty: 'Medium',
            imageUrl: pilatesImage,
          
          },

          {
            id: 5,
            title: 'Dance Fitness',
            description:  'Have fun while burning calories with dance!',
            difficulty: 'Easy',
            imageUrl:danceImage,
          },


        ];
      
        setWorkouts(workoutData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderWorkout = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={incrementCount}>
      <Image
        source={item.imageUrl} // Render either local or external image
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cornerBox}>
        <Text style={styles.welcome}>
          Hello, {userName} <Text style={styles.emoji}>🏋️‍♀️❤️</Text>
        </Text>
        <Text style={styles.subText}>Discover workouts tailored just for you:</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#e91e63" />
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderWorkout}
          contentContainerStyle={styles.list}
        />
      )}

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  cornerBox: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ffc1cc',
    padding: 15,
    borderRadius: 8,
    zIndex: 1,
    elevation: 5,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  emoji: {
    fontSize: 30,
    marginLeft: 10,
  },
  list: {
    paddingTop: 100,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  difficulty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e91e63',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});