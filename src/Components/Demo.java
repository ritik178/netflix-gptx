public class Demo{
    public static void main(String[] args) {
        int arr[] = {1,44,3,2,5,15};
        int key = 15;
        int max = Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==key){
                System.out.println(i);
            }
            
        }
        
    }
}