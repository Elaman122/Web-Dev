from django.shortcuts import render
from .models import *
from django.http.response import JsonResponse

def all_companies(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company(request, company_id):
    try:
        c = Company.objects.get(id = company_id)
        return JsonResponse(c.to_json())
    except Company.DoesNotExist:
        return JsonResponse({'message': 'Product not found'})

def all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy(request, vacancy_id):
    try:
        v = Vacancy.objects.get(id = vacancy_id)
        return JsonResponse(v.to_json())
    except Vacancy.DoesNotExist:
        return JsonResponse({'message': 'Product not found'})

def vacancies_by_company(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def sorted_vacancies(request, cnt=10):
    # Get all vacancies and sort them by salary in descending order
    vacancies = Vacancy.objects.all().order_by('-salary')[:cnt]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)




