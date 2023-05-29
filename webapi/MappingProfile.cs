using AccountBalanceViewer.Models;
using AutoMapper;
using webapi.Models;

public class MappingProfile : Profile
{
    public MappingProfile() {
        this.CreateMap<User,AuthenticateResponse>();
    }
}