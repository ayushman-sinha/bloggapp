import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner in = new Scanner(System.in);
        int radius;
        System.out.print("Enter the radius of the circle : ");
        radius = in.nextInt();
        double area=3.14*radius*radius;
        double circumference=2*3.14*radius;
        if(circumference<=area){
            System.out.println("Radius : "+radius);
        }
        else{
            System.out.println("Area : "+area);
            System.out.println("Circumference : "+circumference);
        }
    }
}