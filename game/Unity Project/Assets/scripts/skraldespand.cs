using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class skraldespand : MonoBehaviour, IDropHandler
{
    [SerializeField]private GM GM;

    public void OnDrop(PointerEventData eventData)
    {
        if (eventData.pointerDrag != null && eventData.pointerDrag.tag == tag)
        {
           
            eventData.pointerDrag.GetComponent<RectTransform>().anchoredPosition = GetComponent<RectTransform>().anchoredPosition; 
            GM.Skrald = GM.Skrald + 1;
            Debug.Log(GM.Skrald); 
            eventData.pointerDrag.SetActive(false);
        }
    }
}
