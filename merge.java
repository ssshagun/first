class Main {
  int[] array;
  int[] tempMerge;
  int length;
  public static void main(String[] args) {
    int inputArr[]={48,36,54,73,23,98};
    Main ms=new Main();
    ms.sort(inputArr);
   
  }
  public void sort(int inputArr[]){
    this.array=inputArr;
    this.length=inputArr.length;
    this.tempMerge=new int[inputArr.length];
}
  public void devideArray(int lowerIndex,int higherIndex){
    if(lowerIndex<higherIndex){
      int middle=lowerIndex+(higherIndex-lowerIndex)/2;
      devideArray(lowerIndex,middle);
      devideArray(middle+1,higherIndex);
      mergeArray(lowerIndex,middle,higherIndex);
    }
  }
  public void mergeArray(int lowerIndex,int mid,int higherIndex){
    int i=lowerIndex;
    int j=mid+1;
    int k=lowerIndex;
    while(i<=mid && j<=higherIndex){
      if(array[i]<=array[j]){
        tempMerge[k]=array[i];
        i++;
      }else{
        tempMerge[k]=array[j];
        j++;
      }
      k++;
    }
    while(i<=mid){
      tempMerge[k]=array[i];
      i++;
    
  }
  }

        public void printArray() {
            for (int i = 0; i < length; i++) {
                System.out.print(array[i] + " ");
            }
            System.out.println();
        }
    }
