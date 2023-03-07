using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;

public class GM : MonoBehaviour
{
    public int Skrald = 0;
    
    [SerializeField] 
    private GameObject Image;

    public void Update()
    {
        if (Skrald == 5)
        {
            Application.Quit();
            Debug.Log("spillet er slut");
            Image.SetActive(true);
        }
    }
}
