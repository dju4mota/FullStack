import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';;

export default function App() {
  const [projects, setProjects] = useState([]);;

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });;
  }, []);
  async function handleAdd() {
    const response = await api.post('projects', {
      name: `Novo ${Date.now()}`,
      owner: '4atom',
    });
    setProjects([...projects, response.data]);
    console.log(response.data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={(project) => project.id}
        renderItem={({item: project}) => (
          <Text style={styles.text}>{project.name}</Text>
        )}
      />
      <TouchableOpacity onPress={handleAdd} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Novo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7159c1',
    padding: 5,
  },
  button: {
    margin: 20,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',,
  },
  buttonText: {
    fontSize: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },,
})
;
;