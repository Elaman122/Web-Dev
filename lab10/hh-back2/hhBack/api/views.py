from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            company = Company.objects.get(id = company_id)
            return company
        except Company.DoesNotExist as r:
            return Response({"error": r}, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, company_id=None):
        company = self.get_object(company_id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, company_id=None):
        company = self.get_object(company_id)
        company.delete()
        return Response({"delete": True})


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancy = Vacancy.objects.all()
        serializer = VacancySerializer(vacancy, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):

    def get_object(self, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id = vacancy_id)
            return vacancy
        except Vacancy.DoesNotExist:
            return Response({'data': 'errors'}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance=vacancy,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,vacancy_id):
        vacancy = self.get_object(vacancy_id)
        vacancy.delete()
        return Response({'result': 'deleted'})


