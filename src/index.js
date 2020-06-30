import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView,
  FlatList,
  Text, 
  StyleSheet, 
  StatusBar, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

import api from './services/api';

export default function App() {
  const [ projects, setProjects ] = useState([]);
  // const [ title, setTitle ] = useState('');
  // const [ owner, setOwner ] = useState('');

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'GuyBr'
    });

    const project = response.data;

    setProjects([... projects, project ])
  }

  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        showHideTransition="slide" 
        backgroundColor="#000a99"
      />
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project} key={project.id}>
              {project.title}
            </Text>
          )}
        />

        <TouchableOpacity 
          onPress={handleAddProject} 
          activeOpacity={0.6} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a99',
  },
  project: {
    fontSize: 22,
    color: '#aaa',
    textAlign: "center"
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16
  }
})